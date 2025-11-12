import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 1. IMPORTAR EL PROVIDER
import { Provider } from 'react-redux';
// 2. IMPORTAR EL STORE (ajusta la ruta si tu store está en otro lugar)
import { store } from './app/store'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 3. ENVOLVER APP CON EL PROVIDER */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();