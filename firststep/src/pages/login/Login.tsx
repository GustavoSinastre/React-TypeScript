import { useNavigate } from "react-router-dom";

export const Login = () => {

    const navigate = useNavigate();

    const HandleClick = () => {
        navigate('/home');  // Chamando navigate diretamente
    };

    return (
        <div>
            Login
            <button onClick={HandleClick}>Home</button>
        </div>
    );
};


