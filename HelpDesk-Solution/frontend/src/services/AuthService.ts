// src/services/AuthService.ts
const API_URL = 'http://127.0.0.1:5000/api';

export const authenticateUser = async (email: string, password: string) => {
    console.log('Attempting to login with:', { email, password }); // Adicionado
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        console.log('Response from login endpoint:', response); // Adicionado

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to authenticate');
        }

        const data = await response.json();
        console.log('Login successful with data:', data); // Adicionado
        return data;
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error in authenticateUser:', error.message); // Adicionado
            throw new Error(error.message);
        } else {
            console.error('An unknown error occurred in authenticateUser'); // Adicionado
            throw new Error('An unknown error occurred');
        }
    }
};
