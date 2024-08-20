import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticateUser } from '../../services/AuthService'; // Serviço de autenticação
import { useAuth } from '../../context/AuthContext'; // Contexto de autenticação
import './Login.css';

const Login: React.FC = () => {
    // Estados para armazenar o email, a senha e possíveis mensagens de erro
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    // Hook de navegação para redirecionar o usuário
    const navigate = useNavigate();
    
    // Hook de autenticação para acessar a função de login
    const { login } = useAuth();

    // Função chamada ao enviar o formulário de login
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault(); // Evita o comportamento padrão do formulário

        try {
            // Tenta autenticar o usuário
            const { message, role } = await authenticateUser(email, password);
            if (message === 'Login successful') {
                // Se a autenticação for bem-sucedida, atualiza o contexto e navega para a home
                login('', role); // Atualiza o contexto com o papel do usuário
                navigate('/home'); // Redireciona para a página inicial
            } else {
                setError('Invalid credentials'); // Define a mensagem de erro
            }
        } catch (error) {
            setError('An error occurred'); // Define a mensagem de erro em caso de exceção
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do email
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Atualiza o estado da senha
                        required
                    />
                </div>
                <button type="submit" className="login-button">Login</button>
                {error && <p className="error-message">{error}</p>} {/* Exibe a mensagem de erro se houver */}
            </form>
        </div>
    );
};

export default Login;
