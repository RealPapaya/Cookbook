import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { registerSW } from 'virtual:pwa-register';
import App from './App';
import '../css/style.css';

const base = import.meta.env.BASE_URL || '/';
const normalizedBase = base === '/' ? '/' : base.replace(/\/$/, '');

registerSW({ immediate: true });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename={normalizedBase}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
