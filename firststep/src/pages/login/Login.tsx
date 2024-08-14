import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Importando um arquivo CSS para estilização

export const Login = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigate = useNavigate();

    const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Previne a atualização da página
        console.log(email);
        console.log(senha);
        navigate('/Home');
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSignIn}>
                <h2>Login</h2>
                
                <div className="form-group">
                    <label>E-mail</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label>Senha</label>
                    <input 
                        type="password" 
                        value={senha} 
                        onChange={e => setSenha(e.target.value)} 
                        required 
                    />
                </div>
                
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
};
