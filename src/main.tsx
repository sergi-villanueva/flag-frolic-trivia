import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { HashRouter } from 'react-router-dom'; // IMPORTANTE: HashRouter

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('No se encontró el elemento root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
