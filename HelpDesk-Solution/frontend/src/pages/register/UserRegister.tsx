// src/pages/register/UserRegister.tsx
import React from 'react';
import { Container, Typography, Grid, Paper, Button, Box } from '@mui/material';
import AddUser from './components/AddUser';
import DeleteUser from './components/DeleteUser';
import { useNavigate } from 'react-router-dom';
import './UserRegister.css'; // Importa o CSS

const UserRegister: React.FC = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/home');
    };

    return (
        <Container maxWidth="md" className="container">
            <Box className="title-container">
                <Typography variant="h4" className="title">
                    Gerenciamento de Usuários
                </Typography>
                <Button variant="contained" color="primary" className="home-button" onClick={handleHomeClick}>
                    Home
                </Button>
            </Box>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} sm={6} md={4} className="grid-item">
                    <Paper elevation={3} className="paper">
                        <Typography variant="h6" gutterBottom align="center">
                            Adicionar Usuário
                        </Typography>
                        <AddUser />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} className="grid-item">
                    <Paper elevation={3} className="paper">
                        <Typography variant="h6" gutterBottom align="center">
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
