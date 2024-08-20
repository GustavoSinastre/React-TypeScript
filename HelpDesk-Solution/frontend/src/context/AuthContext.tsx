// src/context/AuthContext.tsx

import React, { createContext, useContext, useState, useEffect } from 'react';

// Define a interface para o contexto de autenticação
interface AuthContextProps {
    isAuthenticated: boolean;
    userRole: string | null;
    login: (role: string) => void; // Atualize aqui
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [userRole, setUserRole] = useState<string | null>(null);

    useEffect(() => {
        const storedAuthStatus = localStorage.getItem('isAuthenticated') === 'true';
        const storedUserRole = localStorage.getItem('userRole');

        setIsAuthenticated(storedAuthStatus);
        setUserRole(storedUserRole);
    }, []);

    const login = (role: string) => {
        setIsAuthenticated(true);
        setUserRole(role);
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userRole', role);
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUserRole(null);
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('userRole');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
