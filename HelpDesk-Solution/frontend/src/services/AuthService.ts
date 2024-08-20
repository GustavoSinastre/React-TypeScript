const API_URL = 'http://127.0.0.1:5000/api';

// Função para autenticar usuário
export const authenticateUser = async (email: string, password: string) => {
    try {
        console.log('Sending request to backend:', { email, password }); // Log de depuração

        // Envia a requisição para o backend
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        console.log('Response from backend:', response); // Log de depuração

        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error response from backend:', errorData); // Log de depuração
            throw new Error(errorData.message || 'Failed to authenticate');
        }

        // Converte a resposta para JSON
        const data = await response.json();
        console.log('Data received from backend:', data); // Log de depuração
        return data;
    } catch (error) {
        // Trata erros ocorridos durante a requisição
        if (error instanceof Error) {
            console.error('Error occurred:', error.message); // Log de depuração
            throw new Error(error.message);
        } else {
            console.error('An unknown error occurred'); // Log de depuração
            throw new Error('An unknown error occurred');
        }
    }
};
