import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { makeServer } from './api';

// Initialize MirageJS if VITE_USE_MIRAGE is true
if (import.meta.env.VITE_USE_MIRAGE === 'true') {
  makeServer({ environment: import.meta.env.MODE });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
