// src/pages/register/components/AddUser.tsx
import React, { useState } from "react";
import { Button, TextField, Typography, Snackbar, Alert } from "@mui/material";
import { useAuth } from '../../../context/AuthContext';

const AddUser: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [fullName, setFullName] = useState('');
    const [group, setGroup] = useState('');
    const [manager, setManager] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

    const { user } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const userData = { email, password, role, fullName, group, manager };

        try {
            const response = await fetch('http://localhost:5000/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`  // Adicione o token de autenticação aqui
                },
                body: JSON.stringify(userData),
            });
            if (!response.ok) throw new Error('Failed to add user');
            setSnackbarMessage('User added successfully!');
            setSnackbarSeverity('success');
        } catch (error) {
            setSnackbarMessage('Failed to add user.');
            setSnackbarSeverity('error');
        } finally {
            setOpenSnackbar(true);
        }
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth margin="normal" required />
                <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth margin="normal" required />
                <TextField label="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} fullWidth margin="normal" />
                <TextField label="Group" value={group} onChange={(e) => setGroup(e.target.value)} fullWidth margin="normal" />
                <TextField label="Manager" value={manager} onChange={(e) => setManager(e.target.value)} fullWidth margin="normal" />
                <TextField label="Role" value={role} onChange={(e) => setRole(e.target.value)} fullWidth margin="normal" />
                <Button type="submit" variant="contained" color="primary">Add User</Button>
            </form>
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default AddUser;