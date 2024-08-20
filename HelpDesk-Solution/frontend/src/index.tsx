// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App'; // Importa o App como exportação padrão
import { BrowserRouter as Router } from 'react-router-dom'; // Importe o BrowserRouter
import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>
);

reportWebVitals();
