import React, { useContext } from 'react';
import MyInput from '../../components/UI/input/MyInput';
import MyButton from '../../components/UI/button/MyButton';
import { AuthContext } from '../../context';
import './login.less'

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }

    return (
        <div className='auth-container container'>
            <form className='auth-form' onSubmit={login}>
                <div className='auth-form__title'>Авторизация</div>
                <div class="form-group">
                    <label for="login">Электронная почта</label>
                    <MyInput id="login" type="text" placeholder="Введите логин"/>
                </div>
                <div class="form-group">
                    <label for="password">Пароль</label>
                    <MyInput id="password" type="password" placeholder="Введите пароль"/>
                </div>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;