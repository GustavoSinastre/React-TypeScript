// src/pages/login/Login.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "./components/LoginForm";
import { authenticateUser } from '../../services/AuthService'; // Importando o serviço de autenticação
import './Login.css'; // Importando a formatação css

export const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState<string | null>(null); // Estado para armazenar mensagens de erro

    const navigate = useNavigate();

    // Função para lidar com mudanças nos campos de entrada
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'senha') {
            setSenha(value);
        }
    };

    // Função para lidar com a submissão do formulário
    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Previne a atualização da página
        try {
            const response = await authenticateUser(email, senha); // Tenta autenticar o usuário
            localStorage.setItem('token', response.token); // Armazena o token no localStorage
            localStorage.setItem('role', response.role); // Armazena o papel do usuário no localStorage
            navigate('/home'); // Navega para a página Home
        } catch (error) {
            setError('Usuário ou senha inválidos'); // Define a mensagem de erro
        }
    };

    return (
        <div className="login-container">
            <LoginForm
                email={email}
                senha={senha}
                handleInputChange={handleInputChange}
                handleSignIn={handleSignIn}
                error={error} // Passa a mensagem de erro para o LoginForm
            />
        </div>
    );
};
