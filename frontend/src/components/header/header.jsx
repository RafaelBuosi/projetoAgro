/*
 Projeto: AgroTech Connect - Gestão de Startups
 Disciplina: Análise e Desenvolvimento de Sistemas - ADS
 Instituição: Rede Gonzaga de Ensino Superior (REGES) - RIBEIRÃO PRETO
 Autor: Rafael Buosi Jardim, 5º termo
 Referência: Projeto base fornecido pelo Prof. Esp. Miguel Leme
*/

import React from 'react';
import "./header.css";

const Header = ({ isDark, setIsDark, setIsDrawer }) => {
  return (
    <nav className="agro-nav">
      <div className="nav-left">
        {/* Acionador do Drawer (Requisito 4.2: Feedback visual e interatividade) */}
        <button className="btn-menu-trigger" onClick={() => setIsDrawer(true)}>
          <i className="bi bi-list"></i>
        </button>
        
        {/* Requisito 4.2: Identidade visual (Logo) com hierarquia de pesos (800 vs 400) */}
        <h3 className="logo-text">AgroTech <span>Connect</span></h3>
      </div>

      {/* Controle de Tema: Requisito 4.2 (Feedback visual para ações do usuário) */}
      <button className="btn-theme-toggle" onClick={() => setIsDark(!isDark)}>
        <i className={`bi ${isDark ? 'bi-sun-fill' : 'bi-moon-stars-fill'}`}></i>
      </button>
    </nav>
  );
};

export default Header;