import React, {useEffect, useState, useRef} from "react";
import {useUsers} from "../hooks/useUsers"
import {useFetching} from "../hooks/useFetching";

import UserList from "../components/UserList";
import UserForm from "../components/UserForm";
import UserFilter from "../components/UserFilter";

import MyModal from "../components/UI/modal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import Loader from "../components/UI/Loader/Loader";
import Pagination from "../components/UI/pagination/Pagination";

import PostService from "../API/PostService";

import {getPageCount} from '../utils/pages'
import { useObserver } from "../hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";

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
    <div className="App">

      <MyButton style={{marginTop: 30}}onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>

      <MyModal visible={modal} setVisible={setModal}>
        <UserForm create={createUser}/>
      </MyModal>

      <hr style={{margin: '15px 0'}}/>

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
      {userError && 
        <h1>Произошла ошибка: ${userError}</h1>
      }
      
      <UserList remove={removeUser} users={sortedAndSearchUsers}/>

      <div ref={lastElement} style={{height: 20, background: 'red'}}></div>

      {isUsersLoading &&
        <div style={{display: 'flex', justifyContent: 'center', marginTop: 70}}><Loader/></div>
      }
      
      <Pagination 
        page={page} 
        changePage={changePage} 
        totalPages={totalPages}
      />

    </div>
  );
}

export default Users;