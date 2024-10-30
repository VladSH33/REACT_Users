import React from 'react';
import UserItem from './UserItem';
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';

const UserList = ({users, remove}) => {

    if (!users.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Пользователи не найдены!
            </h1>
        )
    }

    return (
        <div>
            <h1 className="title">
                Список пользователей
            </h1>
            <TransitionGroup>
                {users.map((user, index) =>
                    <CSSTransition
                        key={user.id}
                        timeout={500}
                        classNames="user"
                    >
                        <UserItem remove={remove} number={index + 1} user={user}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
            
        </div>
    );
};

export default UserList;