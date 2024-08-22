import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface PrivateRouteProps {
    element: React.ReactNode;
    requiredRole?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, requiredRole }) => {
    const { user } = useAuth();

    // Se o usuário não estiver autenticado ou não tiver o papel necessário, redireciona para /signin
    if (!user) {
        return <Navigate to="/signin" />;
    }

    if (requiredRole && user.role !== requiredRole) {
        return <Navigate to="/home" />;
    }

    return <>{element}</>;
};

export default PrivateRoute;
