/*
 Projeto: AgroTech Connect - Gestão de Startups
 Disciplina: Análise e Desenvolvimento de Sistemas - ADS
 Instituição: Rede Gonzaga de Ensino Superior (REGES) - RIBEIRÃO PRETO
 Autor: Rafael Buosi Jardim, 5º termo
 Referência: Projeto base fornecido pelo Prof. Esp. Miguel Leme
*/

import React from 'react';
import './startupCard.css';

const StartupCard = ({ startup, onCardClick, handleEdit, handleDelete }) => {
  return (
    /* Requisito 4.3: Clique no card abre modal com todos os dados detalhados */
    <div className="startup-card" onClick={() => onCardClick(startup)}>
      <div className="card-header">
        {/* Requisito 4.3: Exibição do Nome da Startup no Card */}
        <h3>{startup.nome}</h3>
      </div>
      
      <div className="card-body">
        {/* Requisito 4.3: Exibição da Especialidade */}
        <p><i className="bi bi-tag"></i> {startup.especialidade}</p>
        
        {/* Requisito 4.1 e 4.3: Exibição obrigatória do Ano de Abertura no Card */}
        <p><i className="bi bi-calendar-event"></i> {startup.anoAbertura}</p>
      </div>

      <div className="card-footer">
        {/* Requisito 4.4: Botão Editar - Abre formulário pré-preenchido */}
        <button 
          className="btn-edit" 
          onClick={(e) => { 
            e.stopPropagation();
            handleEdit(); 
          }}
        >
          <i className="bi bi-pencil"></i> EDITAR
        </button>

        {/* Requisito 4.4: Botão Excluir - Remove registro após confirmação */}
        <button 
          className="btn-delete" 
          onClick={(e) => { 
            e.stopPropagation();
            handleDelete(); 
          }}
        >
          <i className="bi bi-trash"></i> EXCLUIR
        </button>
      </div>
    </div>
  );
};

export default StartupCard;