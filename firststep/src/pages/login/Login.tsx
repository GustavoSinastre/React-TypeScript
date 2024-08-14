import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    const navigate = useNavigate();

    const handleSignIn = () => {
        console.log(email)
        console.log(senha)
        navigate('/Home');  // Chamando navigate diretamente
    }

    return (
        <div>
            <form>
                
                <label>
                    <span>E-mail</span>
                    <input value={email} onChange={e => setEmail(e.target.value)}/>
                </label>

                <label>
                    <span>Senha</span>
                    <input type="password" value={senha} onChange={e => setSenha(e.target.value)}/>
                </label>
                
                <button onClick={handleSignIn}>Login</button>

            </form>
        </div>
    );
};

