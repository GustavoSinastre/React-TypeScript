import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/register/UsersRegister'; // Certifique-se de que o caminho está correto
import PrivateRoute from './PrivateRoute';

const AppRoutes: React.FC = () => {
    const { user } = useAuth();

    return (
        <Routes>
            <Route path="/signin" element={<Login />} /> {/* Rota pública de login */}
            
            {/* Rota protegida para home e, dependendo do papel do usuário, outras páginas */}
            <Route 
                path="/home" 
                element={<PrivateRoute element={<Home />} />} 
            />

            <Route path="*" element={<Navigate to="/signin" />} /> {/* Redireciona qualquer rota não definida para /signin */}
        </Routes>
    );
};

export default AppRoutes;
