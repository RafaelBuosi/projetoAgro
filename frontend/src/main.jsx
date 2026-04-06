/*
 Projeto: AgroTech Connect - Gestão de Startups
 Disciplina: Análise e Desenvolvimento de Sistemas - ADS
 Instituição: Rede Gonzaga de Ensino Superior (REGES) - RIBEIRÃO PRETO
 Autor: Rafael Buosi Jardim, 5º termo
 Referência: Projeto base fornecido pelo Prof. Esp. Miguel Leme
*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//Importação dos estilos do Bootstrap e ícones para garantir a consistência visual e funcionalidade da interface, conforme os requisitos de design (Req 4.2)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
