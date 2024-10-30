import React from 'react';
import MyButton from './UI/button/MyButton';
import { useNavigate } from 'react-router-dom';

const UserItem = (props) => {
    const router = useNavigate()
    console.log(router)
    return (
        <div className='user'>
            <div className="user__content">
                <h2 style={{color: 'black'}}>{props.user.id}. {props.user.name}</h2>
                <div className="user__email" style={{color: 'black'}}>
                    Почта: {props.user.email}
                </div>
                <div className="user__phone" style={{color: 'black'}}>
                    Телефон: {props.user.phone}
                </div>
            </div>

            <div className="user__btns">
                <MyButton onClick={() => router(`/users/${props.user.id}`)}>
                    Открыть
                </MyButton>

                <MyButton onClick={() => props.remove(props.user)}>
                    Удалить
                </MyButton>
            </div>
            
        </div>
    );
};

export default UserItem;