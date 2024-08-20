import React, { createContext, useContext, useState } from 'react';

// Define a estrutura do contexto de autenticação
interface AuthContextProps {
    user: { role: string } | null; // Define que o usuário pode ser null ou um objeto com a propriedade role
    login: (token: string, role: string) => void; // Função para fazer login
    logout: () => void; // Função para fazer logout
}

// Cria o contexto de autenticação
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// Provedor de autenticação
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Estado para armazenar o usuário autenticado
    const [user, setUser] = useState<{ role: string } | null>(null);

    // Função para fazer login e definir o estado do usuário
    const login = (token: string, role: string) => {
        setUser({ role });
    };

    // Função para fazer logout e limpar o estado do usuário
    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook para acessar o contexto de autenticação
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
