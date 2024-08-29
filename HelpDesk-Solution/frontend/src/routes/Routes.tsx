// src/routes/Routes.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import Home from '../pages/home/Home';
import OpenTickets from '../pages/Assignment/OpenTickets';
import Login from '../pages/login/Login';
import PrivateRoute from './PrivateRoute';
import UserRegister from '../pages/register/UserRegister';

const AppRoutes: React.FC = () => {
    const { isAuthenticated } = useAuth();

    return (
        <Routes>
            <Route path="/signin" element={<Login />} />
            
            <Route 
                path="/home" 
                element={<PrivateRoute element={<Home />} />} 
            />

            <Route 
                path="/ticket" 
                element={<PrivateRoute element={<OpenTickets />} />} 
            />

            <Route 
                path="/register"
                element={<PrivateRoute element={<UserRegister />} />}
            />

            {/* Redireciona qualquer rota não definida para /signin se não estiver autenticado */}
            <Route 
                path="*" 
                element={<Navigate to={isAuthenticated ? "/home" : "/signin"} />} 
            />
        </Routes>
    );
};

export default AppRoutes;
