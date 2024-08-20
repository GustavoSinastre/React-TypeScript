// src/components/LogoutButton.tsx

import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate

const LogoutButton: React.FC = () => {
    const { logout } = useAuth();
    const navigate = useNavigate(); // Inicializa o hook useNavigate

    const handleLogout = () => {
        logout(); // Chama a função de logout
        navigate('/signin'); // Redireciona para a página de login
    };

    return <button onClick={handleLogout}>Logout</button>; // Renderiza o botão
};

export default LogoutButton;
