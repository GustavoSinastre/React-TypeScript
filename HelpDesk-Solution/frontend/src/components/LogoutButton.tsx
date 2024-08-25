// src/components/LogoutButton.tsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';

const LogoutButton: React.FC = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/signin');
    };

    return (
        <Button
            variant="contained"
            color="secondary"
            startIcon={<ExitToApp />}
            onClick={handleLogout}
            style={{
                padding: '10px 20px',
                borderRadius: '15px',
                fontSize: '16px',
                fontWeight: 'bold',
                textTransform: 'none'
            }}
        >
            Logout
        </Button>
    );
};

export default LogoutButton;

