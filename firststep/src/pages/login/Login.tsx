import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css"; // Importando um arquivo CSS para estilização
import { LoginForm } from "./components/LoginForm";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

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
    const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Previne a atualização da página
        console.log(email);
        console.log(senha);
        navigate('/Home');
    };

    return (
        <div className="login-container">
            <LoginForm
                email={email}
                senha={senha}
                handleInputChange={handleInputChange}
                handleSignIn={handleSignIn}
            />
        </div>
    );
};