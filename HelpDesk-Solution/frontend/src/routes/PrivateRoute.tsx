// src/routes/PrivateRoute.tsx

import React from 'react';
import { RouteProps } from 'react-router-dom'; // Remova se não estiver usando
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
    element: React.ReactElement;
    requiredRole: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, requiredRole }) => {
    const { isAuthenticated, userRole } = useAuth();

    return isAuthenticated && userRole === requiredRole ? element : <Navigate to="/signin" />;
};

export default PrivateRoute;
