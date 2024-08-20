export const authenticateUser = async (email: string, password: string) => {
    // Simulação de autenticação (substitua com sua implementação real)
    // Retorne um objeto com token e role
    if (email === 'admin@example.com' && password === 'password') {
        return { token: 'fake-token', role: 'admin' };
    } else {
        throw new Error('Invalid credentials');
    }
};