// src/pages/ticket/ConsultTickets.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Grid, Typography } from '@mui/material';
import { useAuth } from '../../context/AuthContext';

const ConsultTickets: React.FC = () => {
    const [chamados, setChamados] = useState<any[]>([]);
    const [filter, setFilter] = useState('');
    const { user } = useAuth();

    useEffect(() => {
        const fetchChamados = async () => {
            try {
                const response = await axios.get('/api/chamados', {
                    params: { filter }
                });
                setChamados(response.data);
            } catch (error) {
                console.error('Erro ao carregar chamados:', error);
            }
        };

        if (user?.role === 'admin') {
            fetchChamados();
        } else {
            // Caso não seja admin, você pode implementar lógica específica
            // para usuários normais, se necessário.
        }
    }, [filter, user]);

    return (
        <div>
            <Typography variant="h6">Consultar Chamados</Typography>
            <TextField
                label="Filtrar por Hierarquia"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button
                onClick={() => setFilter(filter)}
                variant="contained"
                color="primary"
                style={{ marginTop: 16 }}
            >
                Buscar
            </Button>
            <Grid container spacing={2} style={{ marginTop: 16 }}>
                {chamados.length > 0 ? (
                    chamados.map((chamado) => (
                        <Grid item key={chamado.id} xs={12} sm={6} md={4}>
                            <div>
                                <Typography variant="body1">ID: {chamado.id}</Typography>
                                <Typography variant="body2">Tipo: {chamado.tipo_chamado_id}</Typography>
                                <Typography variant="body2">Status: {chamado.status}</Typography>
                                <Typography variant="body2">SLA Aprovação: {chamado.sla_aprovacao}</Typography>
                                <Typography variant="body2">SLA Tratamento: {chamado.sla_tratamento}</Typography>
                                {/* Adicione mais detalhes conforme necessário */}
                            </div>
                        </Grid>
                    ))
                ) : (
                    <Typography variant="body1">Nenhum chamado encontrado</Typography>
                )}
            </Grid>
        </div>
    );
};

export default ConsultTickets;
