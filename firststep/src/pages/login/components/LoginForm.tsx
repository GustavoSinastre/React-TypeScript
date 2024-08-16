// LoginForm.tsx
import React from 'react';
import { InputFieldLogin } from './InputFieldLogin';

interface LoginFormProps {
    email: string;
    senha: string;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSignIn: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const LoginForm: React.FC<LoginFormProps> = 
({ email, senha, handleInputChange, handleSignIn }) => {
    return (
        <form className="login-form" onSubmit={handleSignIn}>
            <h2>Login</h2>

            <InputFieldLogin
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={handleInputChange}
                label="E-mail"
            />

            <InputFieldLogin
                id="senha"
                type="password"
                name="senha"
                value={senha}
                onChange={handleInputChange}
                label="Senha"
            />

            <button type="submit" className="login-button">Login</button>
        </form>
    );
};
