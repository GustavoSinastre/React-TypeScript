// src/routes/index.tsx

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Login } from '../pages/login/Login'; // Importa o componente Login como exportação nomeada
import { Home } from '../pages/home/Home'; // Importa o componente Home como exportação nomeada
import PrivateRoute from './PrivateRoute'; // Importa o componente PrivateRoute

// Componente principal que gerencia todas as rotas do sistema
export const AppRoutes = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false); // Estado para armazenar se o usuário está autenticado

    useEffect(() => {
        // Verifica se há um token armazenado no localStorage
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token); // Se o token existir, o usuário está autenticado
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                {/* Define a rota pública para a página de login */}
                <Route path="/login" element={<Login />} />

                {/* Define uma rota protegida para a página Home */}
                <Route
                    path="/home"
                    element={
                        <PrivateRoute
                            element={<Home />}
                            isAuthenticated={isAuthenticated}
                        />
                    }
                />

                {/* Redireciona qualquer outra rota desconhecida para a página de login */}
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
