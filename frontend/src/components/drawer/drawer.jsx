/*
 Projeto: AgroTech Connect - Gestão de Startups
 Disciplina: Análise e Desenvolvimento de Sistemas - ADS
 Instituição: Rede Gonzaga de Ensino Superior (REGES) - RIBEIRÃO PRETO
 Autor: Rafael Buosi Jardim, 5º termo
 Referência: Projeto base fornecido pelo Prof. Esp. Miguel Leme
*/

import React from 'react';
import "./drawer.css";

const Drawer = ({ isOpen, onClose }) => {
  return (
    <>
      <div className={`drawer-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}></div>
      <aside className={`drawer-content ${isOpen ? 'active' : ''}`}>
        <button className="btn-close-drawer" onClick={onClose}><i className="bi bi-x-lg"></i></button>
        <h2>MENU</h2>
        <nav className="drawer-nav">
          <a href="#" className="drawer-link"><i className="bi bi-cpu"></i> DASHBOARD</a>
          <a href="#" className="drawer-link"><i className="bi bi-info-circle"></i> SUPORTE</a>
          <a href="#" className="drawer-link"><i className="bi bi-gear"></i> CONFIGURAÇÕES</a>
        </nav>
      </aside>
    </>
  );
};

export default Drawer;