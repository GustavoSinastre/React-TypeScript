import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();

    const HandleClick = () => {
        navigate('/login');  // Chamando navigate diretamente
    };

    return (
        <div>
            <p>Home</p>
            <button onClick={HandleClick}>Login</button>
        </div>
    )
}
