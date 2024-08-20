// src/routes/PrivateRoute.tsx

import React from 'react';
import { Route, Navigate } from 'react-router-dom';

interface PrivateRouteProps {
    element: React.ReactElement; // Define o tipo do elemento que será renderizado
    isAuthenticated: boolean; // Indica se o usuário está autenticado
}

// Componente PrivateRoute
const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, isAuthenticated }) => {
    // Verifica se o usuário está autenticado
    // Se estiver, renderiza o componente solicitado (element)
    // Caso contrário, redireciona para a página de login
    return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
