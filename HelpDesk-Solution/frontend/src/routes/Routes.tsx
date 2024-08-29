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
    const { user } = useAuth();

    return (
        <Routes>
            <Route path="/signin" element={<Login />} /> {/* Rota pública de login */}
            
            {/* Rota protegida para home */}
            <Route 
                path="/home" 
                element={<PrivateRoute element={<Home />} />} 
            />

            {/* Rota protegida para tickets */}
            <Route 
                path="/ticket" 
                element={<PrivateRoute element={<OpenTickets />} />} 
            />

            <Route 
                path="/register"
                element={<PrivateRoute element={<UserRegister />} />}
            />

            {/* Redireciona qualquer rota não definida para /signin */}
            <Route path="*" element={<Navigate to="/signin" />} />
        </Routes>
    );
};

export default AppRoutes;
