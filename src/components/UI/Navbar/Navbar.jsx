import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../button/MyButton';
import { AuthContext } from '../../../context';

import classes from './navbar.module.less'

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <nav className={classes.nav}>
            <ul className={classes.linksContainer}>
                <li>
                    <MyButton onClick={logout}>
                        Выйти
                    </MyButton>
                </li>
                <li><Link to='/about'>О сайте</Link></li>
                <li><Link to='/users'>Пользователи</Link></li>
            </ul>
            
        </nav>
    );
};

export default Navbar;