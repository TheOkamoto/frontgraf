import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/app/default';
import { Home } from './app/home';
import AuthLayout from './layouts/auth/authLayout';
import Login from './auth/login';
import { Home2 } from './app/home2';

export default function Router() {
    return (
        <Routes>
        <Route path="/" element={ <DefaultLayout />} >   
            <Route path="/" element={<Home />} />
            <Route path="/home2" element={<Home2/>} />
        </Route>
        <Route path="/" element={<AuthLayout />} >
            <Route path="/login" element={<Login />} />
            </Route>
        </Routes>
    )
}