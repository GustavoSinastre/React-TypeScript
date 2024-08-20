import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Importa o hook de autenticação

// Define as propriedades que o componente PrivateRoute deve receber
interface PrivateRouteProps {
    element: React.ReactElement; // Componente a ser renderizado se o usuário estiver autenticado
    requiredRole: string; // Papel necessário para acessar a rota
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, requiredRole }) => {
    // Obtém o usuário do contexto de autenticação
    const { user } = useAuth(); 

    // Verifica se o usuário está autenticado e se tem o papel necessário
    if (!user || (requiredRole && user.role !== requiredRole)) {
        // Se não estiver autenticado ou não tiver o papel necessário, redireciona para o login
        return <Navigate to="/signin" />;
    }

    // Se o usuário estiver autenticado e tiver o papel necessário, renderiza o componente
    return element;
};

export default PrivateRoute;
