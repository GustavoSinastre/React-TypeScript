// src/pages/login/Login.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticateUser } from '../../services/AuthService';
import { useAuth } from '../../context/AuthContext';
import { LoginForm } from './components/LoginForm'; // Verifique o caminho
import './Login.css'; // Verifique o caminho

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/home');
        }
    }, [isAuthenticated, navigate]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'email') setEmail(value);
        if (name === 'senha') setPassword(value);
    };

    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const { message, access_token, role } = await authenticateUser(email, password);
            if (message === 'Login successful') {
                login(access_token, role);
                // A navegação para home agora será tratada pelo useEffect
            } else {
                setError('Invalid credentials');
            }
        } catch (error) {
            setError('An error occurred');
        }
    };

    return (
        <div className="login-container">
            <LoginForm
                email={email}
                senha={password}
                handleInputChange={handleInputChange}
                handleSignIn={handleSignIn}
                error={error}
            />
        </div>
    );
};

export default Login;
