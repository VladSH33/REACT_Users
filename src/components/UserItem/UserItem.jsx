import React from 'react';
import MyButton from '../UI/button/MyButton';
import { useNavigate } from 'react-router-dom';

import './UserItem.less'

const UserItem = (props) => {
    const router = useNavigate()
    console.log(router)
    return (
        <div className='user'>
            <div className="user__content">
                <h2>{props.number}. {props.user.name}</h2>
                <div className="user__characteristic">
                    <div className="user__email">
                        Почта: {props.user.email}
                    </div>
                    <div className="user__phone">
                        Телефон: {props.user.phone}
                    </div>
                </div>
                
            </div>

            <div className="user__btns">
                <MyButton onClick={() => router(`/users/${props.user.id}`)}>
                    Открыть
                </MyButton>

                <MyButton red onClick={() => props.remove(props.user)}>
                    Удалить
                </MyButton>
            </div>
            
        </div>
    );
};

export default UserItem;