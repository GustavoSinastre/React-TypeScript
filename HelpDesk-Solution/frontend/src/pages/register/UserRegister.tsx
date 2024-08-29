// src/pages/register/UserRegister.tsx
import React from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';
import AddUser from './components/AddUser';
import DeleteUser from './components/DeleteUser';

const UserRegister: React.FC = () => {
    return (
        <Container maxWidth="md" style={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom align="center">
                Gerenciamento de Usuários
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <Typography variant="h6" gutterBottom>
                            Adicionar Usuário
                        </Typography>
                        <AddUser />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <Typography variant="h6" gutterBottom>
                            Excluir Usuário
                        </Typography>
                        <DeleteUser />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default UserRegister;
