// Função para autenticar um usuário com e-mail e senha.

// Utiliza uma Promise para simular uma chamada ao backend.

export const authenticateUser = async (email: string, password: string) => {
    return new Promise<{ token: string; role: string }>((resolve, reject) => {
        setTimeout(() => {
            if (email === "admin@example.com" && password === "password") {
                resolve({
                    token: "fake-jwt-token",
                    role: "admin",
                });
            } else {
                reject("Invalid credentials");
            }
        }, 1000); // Simula um atraso de 1 segundo
    });
};


export {};
