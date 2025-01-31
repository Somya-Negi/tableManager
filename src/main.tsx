import React from 'react';  
import ReactDOM from 'react-dom/client'; 
import App from './App.tsx'
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';          
import 'primeicons/primeicons.css';                     
import 'primeflex/primeflex.css'; 


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />  
  </React.StrictMode>
);