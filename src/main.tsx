import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { HashRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  // QUITAMOS StrictMode para evitar el doble renderizado que rompe la app
  root.render(
    <HashRouter>
      <App />
    </HashRouter>
  );
}
