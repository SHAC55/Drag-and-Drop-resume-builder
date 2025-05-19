import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BuilderProvider } from './Context/BuilderContext';
import './index.css'; // this must match the file where you wrote Tailwind directives


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BuilderProvider>
    <App />
  </BuilderProvider>
);
