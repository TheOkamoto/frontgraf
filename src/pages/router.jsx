import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/app/defaultLayout';
import AuthLayout from './layouts/auth/authLayout';
import Login from './auth/login';
import UserList from './app/users/UserList';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<AuthLayout />}>
                <Route path="/" element={<Login />} />
            </Route>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/users" element={<UserList />} />
            </Route>
        </Routes>
    );
}
