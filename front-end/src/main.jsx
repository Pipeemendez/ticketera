import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App.jsx';
import Perfil from './pages/Perfil/Perfil.jsx';
import Login from './pages/Login/Login.jsx';
import Evento from './pages/Evento/Evento.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inicio" element={<App />} />
        <Route path='/perfil' element={<Perfil />} />
        <Route path='/evento/:id' element={<Evento />} /> 
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
