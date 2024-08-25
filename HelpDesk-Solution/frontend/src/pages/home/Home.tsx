// src/pages/home/Home.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import { Person, Assignment, CheckCircle, Build } from '@mui/icons-material';
import LogoutButton from '../../components/LogoutButton';
import { useAuth } from '../../context/AuthContext';
import MenuCard from './components/MenuCard';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const menuItems = [
    ...(user?.role === 'admin' ? [{ title: 'Cadastro', icon: <Person style={{ fontSize: 40 }} />, path: '/cadastro' }] : []),
    { title: 'Chamados', icon: <Assignment style={{ fontSize: 40 }} />, path: '/ticket' },
    { title: 'Aprovações', icon: <CheckCircle style={{ fontSize: 40 }} />, path: '/aprovacoes' },
    { title: 'Tratamento', icon: <Build style={{ fontSize: 40 }} />, path: '/tratamento' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4" align="center" gutterBottom style={{ flexGrow: 1 }}>
          Bem-vindo ao Sistema HelpDesk
        </Typography>
        <LogoutButton />
      </div>
      <Grid container spacing={4} justifyContent="center">
        {menuItems.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <MenuCard
              title={item.title}
              icon={item.icon}
              onClick={() => navigate(item.path)}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
