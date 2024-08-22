// src/routes/PrivateRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface PrivateRouteProps {
    element: React.ReactNode;
    requiredRole?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, requiredRole }) => {
    const { user } = useAuth();

    // Se o usuário não estiver autenticado, redireciona para /signin
    if (!user) {
        return <Navigate to="/signin" />;
    }

    // Se o requiredRole for especificado e o usuário não tiver o papel necessário, redireciona para /home
    if (requiredRole && user.role !== requiredRole) {
        return <Navigate to="/home" />;
    }

    // Caso contrário, renderiza o componente
    return <>{element}</>;
};

export default PrivateRoute;
