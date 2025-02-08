import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/app/default';
import { Home } from './app/home';
import AuthLayout from './layouts/auth/authLayout';
import Login from './auth/login';
import { Home2 } from './app/home2';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<AuthLayout />}>
                <Route path="/" element={<Login />} />
            </Route>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/home" element={<Home />} />
            </Route>
        </Routes>
    );
}
