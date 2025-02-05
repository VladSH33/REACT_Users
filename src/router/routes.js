import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import UserIdPage from "../pages/UserPage/UserIdPage";
import Users from "../pages/Users/Users";

export const privateRoutes = [
    {path: '/about', component: About},
    {path: '/users', component: Users},
    {path: '/users/:id', component: UserIdPage}
]

export const publicRoutes = [
    {path: '/login', component: Login},
]