import React, {useEffect, useState, useRef} from "react";
import {useUsers} from "../../hooks/useUsers"
import {useFetching} from "../../hooks/useFetching";

import UserList from "../../components/UserList/UserList";
import UserForm from "../../components/UserForm/UserForm";
import UserFilter from "../../components/UserFilter/UserFilter";

import MyModal from "../../components/UI/modal/MyModal";
import MyButton from "../../components/UI/button/MyButton";
import Loader from "../../components/UI/Loader/Loader";
import Pagination from "../../components/UI/pagination/Pagination";

import PostService from "../../API/PostService";

import {getPageCount} from '../../utils/pages'
import { useObserver } from "../../hooks/useObserver";
import MySelect from "../../components/UI/select/MySelect";

import './Users.less'

function Users() {

  const [users, setUsers] = useState([])
  const [filter, setFilter] = useState({sort:'', query:''});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(2)
  const [page, setPage] = useState(1)
  const sortedAndSearchUsers = useUsers(users, filter.sort, filter.query);
  const lastElement = useRef()

  const [fetchUsers, isUsersLoading, userError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setUsers([...users ,...response.data])
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit));
    console.log(totalCount)
  })

  useObserver(lastElement, page < totalPages, isUsersLoading, () => {
    setPage(page + 1);
  })

  useEffect(() => {
    fetchUsers()
  }, [page, limit])

  const createUser = (newUser) => {
    setUsers([...users, newUser])
    setModal(false)
  }

  const removeUser = (user) => {
    setUsers(users.filter(p => p.id !== user.id))
  }

  const changePage = (page) => {
    setPage(page)
  }

  return (
    <div className="users">
        <div className="users__module-box">
            <div className="users__btn-create">
              <MyButton onClick={() => setModal(true)}>
                Создать пользователя
              </MyButton>
            </div>

            <MyModal visible={modal} setVisible={setModal}>
              <UserForm create={createUser} quantity={users.length}/>
            </MyModal>

            <div className="title-parametrs">Параметры отображения пользователей:</div>

            <div className="filterContainer">
              <UserFilter
                filter={filter} 
                setFilter={setFilter}
              />
              <MySelect 
                value={limit}
                onChange={value => setLimit(value)}
                defaultValue="Кол-во элементов на странице"
                options={[
                  {value: 2, name: '2'},
                  {value: 5, name: '5'},
                  {value: -1, name: 'Все'}
                ]}
              />
            </div>
        </div>
        
        
      <div className="users__list">
          {userError && 
            <h1>Произошла ошибка: ${userError}</h1>
          }
          
          <UserList remove={removeUser} users={sortedAndSearchUsers} isUsersLoading={isUsersLoading}/>

          <div ref={lastElement} style={{height: 20}}></div>

          {isUsersLoading &&
            <div><Loader/></div>
          }

          {/*       
            <Pagination 
              page={page} 
              changePage={changePage} 
              totalPages={totalPages}
            /> 
          */}
      </div>
      

    </div>
  );
}

export default Users;