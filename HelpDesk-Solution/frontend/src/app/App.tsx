import React from 'react';
import { AuthProvider } from '../context/AuthContext';
import AppRoutes from '../routes/Routes';
import '../styles/GlobalStyles.css';

const App: React.FC = () => {
    return (
        <AuthProvider>
            <AppRoutes />
        </AuthProvider>
    );
};

export default App;
