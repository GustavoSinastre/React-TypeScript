// src/routes/Routes.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import Home from '../pages/home/Home';
import OpenTickets from '../pages/Assignment/OpenTickets';
import Login from '../pages/login/Login';
import Register from '../pages/register/UsersRegister';
import PrivateRoute from './PrivateRoute';

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

            <Route path="*" element={<Navigate to="/signin" />} /> {/* Redireciona qualquer rota não definida para /signin */}
        </Routes>
    );
};

export default AppRoutes;
