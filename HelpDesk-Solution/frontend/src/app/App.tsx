// src/app/App.tsx

import React from 'react';
import { AuthProvider } from '../context/AuthContext'; // Certifique-se de que o caminho está correto
import AppRoutes from '../routes'; // Corrija o caminho se necessário

const App: React.FC = () => {
    return (
        <AuthProvider>
            <AppRoutes />
        </AuthProvider>
    );
};

export default App; // Exportação padrão
