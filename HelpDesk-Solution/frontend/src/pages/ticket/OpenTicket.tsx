// src/pages/ticket/OpenTicket.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useAuth } from '../../context/AuthContext';

const OpenTicket: React.FC = () => {
    const { user } = useAuth();
    const [tiposChamados, setTiposChamados] = useState<any[]>([]);
    const [tipoChamado, setTipoChamado] = useState<number | string>('');
    const [slaAprovacao, setSlaAprovacao] = useState<number>(0);
    const [slaTratamento, setSlaTratamento] = useState<number>(0);

    useEffect(() => {
        // Função para carregar os tipos de chamados
        const fetchTiposChamados = async () => {
            try {
                const response = await axios.get('/api/tipos_chamados');
                setTiposChamados(response.data);
            } catch (error) {
                console.error('Erro ao carregar tipos de chamados:', error);
            }
        };

        fetchTiposChamados();
    }, []);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (user?.role) {  // Verifique o role em vez de id
            try {
                await axios.post('/api/chamados', {
                    tipo_chamado_id: tipoChamado,
                    usuario_role: user.role,  // Use role em vez de id
                    sla_aprovacao: slaAprovacao,
                    sla_tratamento: slaTratamento
                });
                // Manejo pós-submit (limpar campos, mostrar mensagem de sucesso, etc.)
                alert('Chamado aberto com sucesso!');
                setTipoChamado('');
                setSlaAprovacao(0);
                setSlaTratamento(0);
            } catch (error) {
                console.error('Erro ao abrir chamado:', error);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormControl fullWidth margin="normal">
                <InputLabel>Tipo de Chamado</InputLabel>
                <Select
                    value={tipoChamado}
                    onChange={(e) => setTipoChamado(e.target.value)}
                    required
                >
                    {tiposChamados.map((tipo) => (
                        <MenuItem key={tipo.id} value={tipo.id}>
                            {tipo.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <TextField
                label="SLA Aprovação"
                type="number"
                value={slaAprovacao}
                onChange={(e) => setSlaAprovacao(Number(e.target.value))}
                fullWidth
                margin="normal"
                required
            />
            <TextField
                label="SLA Tratamento"
                type="number"
                value={slaTratamento}
                onChange={(e) => setSlaTratamento(Number(e.target.value))}
                fullWidth
                margin="normal"
                required
            />
            <Button type="submit" variant="contained" color="primary">
                Abrir Chamado
            </Button>
        </form>
    );
};

export default OpenTicket;
