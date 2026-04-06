/*
 Projeto: AgroTech Connect - Gestão de Startups
 Disciplina: Análise e Desenvolvimento de Sistemas - ADS
 Instituição: Rede Gonzaga de Ensino Superior (REGES) - RIBEIRÃO PRETO
 Autor: Rafael Buosi Jardim, 5º termo
 Referência: Projeto base fornecido pelo Prof. Esp. Miguel Leme
*/

import React from 'react';
import './modal.css';

const DetailsModal = ({ startup, onClose }) => {
  if (!startup) return null;

  return (
    /* Requisito 4.3: Modal com overlay escuro e fechamento ao clicar fora */
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Requisito 4.3: Botão de fechar (X) conforme especificação */}
        <button className="btn-close-x" onClick={onClose}>&times;</button>
        
        <h2 className="modal-title">{startup.nome}</h2>
        
        <div className="modal-body">
          {/* Requisito 4.3: Exibição dos detalhes completos da Startup */}
          <p><strong>Especialidade:</strong> {startup.especialidade}</p>
          
          {/* Requisito 4.1: Exibição obrigatória do Ano de Abertura no modal */}
          <p><strong>Ano de Fundação:</strong> {startup.anoAbertura}</p>
          
          <p><strong>Setor:</strong> Agronegócio</p>
          
          <hr style={{ opacity: 0.1, margin: '20px 0' }} />
          
          {/* Identificação técnica do registro para melhor rastreabilidade */}
          <p className="modal-id">ID do Registro: #{startup.id}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;