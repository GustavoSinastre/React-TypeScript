// src/routes/index.tsx

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/home/Home'; // Importação padrão
import Login from '../pages/login/Login'; // Importação padrão
import PrivateRoute from './PrivateRoute'; // Certifique-se de que o caminho está correto

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/signin" element={<Login />} />
            <Route 
                path="/home" 
                element={<PrivateRoute element={<Home />} requiredRole="admin" />} 
            />
            <Route path="*" element={<Navigate to="/signin" />} />
        </Routes>
    );
};

export default AppRoutes;
