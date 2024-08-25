// src/pages/ticket/ReopenTicket.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Grid, Typography } from '@mui/material';
import { useAuth } from '../../context/AuthContext';

const ReopenTicket: React.FC = () => {
  const [chamados, setChamados] = useState<any[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    async function fetchChamados() {
      try {
        const response = await axios.get('/api/chamados', { params: { usuario_role: user?.role } });  // Use role em vez de id
        setChamados(response.data);
      } catch (error) {
        console.error('Erro ao carregar chamados:', error);
      }
    }
    fetchChamados();
  }, [user?.role]);  // Use role em vez de id

  const handleReopen = async (id: number) => {
    try {
      await axios.patch(`/api/chamados/${id}/reabrir`);
      alert('Chamado reaberto com sucesso!');
      // Atualize a lista de chamados após reabertura
      setChamados(chamados.filter((chamado) => chamado.id !== id));
    } catch (error) {
      console.error('Erro ao reabrir chamado:', error);
    }
  };

  return (
    <div>
      <Typography variant="h6">Reabrir Chamados</Typography>
      <Grid container spacing={2}>
        {chamados.map((chamado) => (
          <Grid item key={chamado.id} xs={12} sm={6}>
            <div>
              <Typography variant="body1">{chamado.title}</Typography>
              <Typography variant="body2">Status: {chamado.status}</Typography>
              <Button onClick={() => handleReopen(chamado.id)}>Reabrir Chamado</Button>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ReopenTicket;
