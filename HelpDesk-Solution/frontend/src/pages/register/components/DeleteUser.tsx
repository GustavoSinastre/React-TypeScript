// src/pages/register/components/DeleteUser.tsx
import React, { useState } from 'react';
import { Button, TextField, Snackbar, Alert, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useAuth } from '../../../context/AuthContext';

const DeleteUser: React.FC = () => {
    const [email, setEmail] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
    const [openDialog, setOpenDialog] = useState(false);
    const [emailToDelete, setEmailToDelete] = useState('');

    const { user } = useAuth();  // Use o hook de autenticação para obter o token

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Exemplo de confirmação simples
            setEmailToDelete(email);
            setOpenDialog(true);
        } catch (error) {
            setSnackbarMessage('Failed to delete user.');
            setSnackbarSeverity('error');
            setOpenSnackbar(true);
        }
    };

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/users/${encodeURIComponent(emailToDelete)}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`  // Adicione o token de autenticação aqui
                },
            });
            if (!response.ok) throw new Error('Failed to delete user');
            setSnackbarMessage('User deleted successfully!');
            setSnackbarSeverity('success');
        } catch (error) {
            setSnackbarMessage('Failed to delete user.');
            setSnackbarSeverity('error');
        } finally {
            setOpenDialog(false);
            setOpenSnackbar(true);
        }
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                />
                <Button type="submit" variant="contained" color="error">Delete User</Button>
            </form>
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Confirm Deletion</DialogTitle>
                <DialogContent>
                    <p>Are you sure you want to delete the user with email: {emailToDelete}?</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">Cancel</Button>
                    <Button onClick={handleDelete} color="error">Delete</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default DeleteUser;