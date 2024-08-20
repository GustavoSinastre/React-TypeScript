// src/pages/home/Home.tsx

import React from 'react';
import LogoutButton from '../../components/LogoutButton'; // Certifique-se de que o caminho está correto

const Home: React.FC = () => {
    return (
        <div>
            <h1>Bem-vindo à página inicial!</h1>
            <LogoutButton /> {/* Adiciona o botão de logout */}
        </div>
    );
};

export default Home;
