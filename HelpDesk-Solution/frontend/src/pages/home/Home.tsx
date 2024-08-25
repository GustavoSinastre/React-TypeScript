// src/pages/home/Home.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { Person, Assignment, CheckCircle, Build } from '@mui/icons-material';
import LogoutButton from '../../components/LogoutButton'; // Importe o LogoutButton

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const menuItems = [
    { title: 'Cadastro', icon: <Person style={{ fontSize: 40 }} />, path: '/cadastro' },
    { title: 'Abertura de Chamados', icon: <Assignment style={{ fontSize: 40 }} />, path: '/ticket' },
    { title: 'Aprovações', icon: <CheckCircle style={{ fontSize: 40 }} />, path: '/aprovacoes' },
    { title: 'Tratamento', icon: <Build style={{ fontSize: 40 }} />, path: '/tratamento' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4" align="center" gutterBottom style={{ flexGrow: 1 }}>
          Bem-vindo ao Sistema HelpDesk
        </Typography>
        <LogoutButton /> {/* Inclua o botão de logout aqui */}
      </div>
      <Grid container spacing={4} justifyContent="center">
        {menuItems.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              onClick={() => handleNavigation(item.path)}
              style={{ cursor: 'pointer', textAlign: 'center', padding: '20px', transition: 'transform 0.3s', borderRadius: '15px' }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <CardContent>
                {item.icon}
                <Typography variant="h5" component="div">
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
