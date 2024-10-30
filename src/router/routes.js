import About from "../pages/About";
import Login from "../pages/Login";
import UserIdPage from "../pages/UserIdPage";
import Users from "../pages/Users";

export const privateRoutes = [
    {path: '/about', component: About},
    {path: '/users', component: Users},
    {path: '/users/:id', component: UserIdPage}
]

export const publicRoutes = [
    {path: '/login', component: Login},
]