// src/pages/ticket/TicketRoutes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '../../routes/PrivateRoute'; // Importe o PrivateRoute
import OpenTicket from './OpenTicket';
import ConsultTickets from './ConsultTickets';
import ReopenTicket from './ReopenTicket';

const TicketRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="abrir" element={<PrivateRoute element={<OpenTicket />} requiredRole="user" />} />
            <Route path="consultar" element={<PrivateRoute element={<ConsultTickets />} requiredRole="user" />} />
            <Route path="reabrir" element={<PrivateRoute element={<ReopenTicket />} requiredRole="user" />} />
        </Routes>
    );
};

export default TicketRoutes;
