import React from 'react';
import UserItem from '../UserItem/UserItem';
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';

import './UserList.less'

const UserList = ({users, remove, isUsersLoading}) => {

    if (!users.length && !isUsersLoading) {
        return (
            <h1 className='userList__title-undefind'>
                Пользователи не найдены!
            </h1>
        )
    }
    return (
        <div className='userList'>
            <h1 className="userList__title">
                Список пользователей
            </h1>
            <TransitionGroup className='userList__container'>
                {users.map((user, index) =>
                    <CSSTransition
                        key={user.id}
                        timeout={500}
                        classNames="user"
                    >
                        <UserItem remove={remove} number={user.id} user={user}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
            
        </div>
    );
};

export default UserList;