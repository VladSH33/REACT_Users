import React, { useContext } from 'react';

import {Route, Routes} from "react-router-dom";

import Users from "../pages/Users/Users";
import { privateRoutes, publicRoutes } from '../router/routes';
import Login from '../pages/Login/Login';
import { AuthContext } from '../context';

const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    return (
            isAuth
                ?
                <Routes>
                    <Route path="/*" element={<Users to="/users" replace />}/>
                    {privateRoutes.map(route =>
                        <Route key={route.path} path={route.path} element={<route.component/>} />
                    )}
                </Routes>
                :
                <Routes>
                    <Route path="/*" element={<Login to="/login" replace />}/>
                    {publicRoutes.map(route =>
                        <Route key={route.path} path={route.path} element={<route.component/>} />
                    )}
                </Routes>
    );
};

export default AppRouter;