// src/pages/login/Login.tsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticateUser } from '../../services/AuthService'; // Verifique o caminho correto
import { useAuth } from '../../context/AuthContext';
import './Login.css'; // Importa o CSS

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const { token, role } = await authenticateUser(email, senha);
            login(role);
            navigate('/home');
        } catch (error) {
            setError('Usuário ou senha inválidos');
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin} className="login-form">
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="senha">Senha:</label>
                    <input
                        id="senha"
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>
                <button type="submit" className="login-button">Login</button>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
};

export default Login;
