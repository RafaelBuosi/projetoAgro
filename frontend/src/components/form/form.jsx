/*
 Projeto: AgroTech Connect - Gestão de Startups
 Disciplina: Análise e Desenvolvimento de Sistemas - ADS
 Instituição: Rede Gonzaga de Ensino Superior (REGES) - RIBEIRÃO PRETO
 Autor: Rafael Buosi Jardim, 5º termo
 Referência: Projeto base fornecido pelo Prof. Esp. Miguel Leme
*/

import React from "react";
import "./form.css";

const StartupForm = ({ formData, handleInputChange, isFormValid, handleAction, editingId, cancelEdit }) => {
  
  // Requisito 4.1: Validação visual para o erro do ano (Mínimo 1900)
  const isYearInvalid = formData.anoAbertura !== '' && parseInt(formData.anoAbertura) < 1900;

  // Requisito 4.1: Lógica rigorosa - Botão só habilita se todos os campos forem válidos
  const canSubmit = isFormValid && !isYearInvalid;

  return (
    <section className="form-panel">
      <div className="form-grid">
        
        {/* Campo NOME (Obrigatório) */}
        <div className="form-field">
          <label className="form-label">NOME</label>
          <input 
            name="nome" 
            type="text"
            className="form-control" 
            value={formData.nome} 
            onChange={handleInputChange} 
            placeholder="Ex: AgroFácil" 
          />
        </div>
        
        {/* Requisito 4.1: Campo ANO com tratamento de erro e ícone dinâmico */}
        <div className="form-field">
          <label className="form-label">ANO</label>
          <div className="input-with-icon">
            <input 
              name="anoAbertura" 
              type="number" 
              className={`form-control ${isYearInvalid ? 'is-invalid' : ''}`} 
              value={formData.anoAbertura} 
              onChange={handleInputChange} 
              placeholder="Ex: 2024" 
            />
            {/* Requisito 4.1: Ícone de erro em caso de ano menor que 1900 */}
            {isYearInvalid && <span className="error-icon" title="Ano inválido"></span>}
          </div>
          {isYearInvalid && <span className="error-text">Mínimo: 1900</span>}
        </div>
        
        {/* Campo ESPECIALIDADE (Obrigatório) */}
        <div className="form-field">
          <label className="form-label">ESPECIALIDADE</label>
          <input 
            name="especialidade" 
            type="text"
            className="form-control" 
            value={formData.especialidade} 
            onChange={handleInputChange} 
            placeholder="Ex: Sensores" 
          />
        </div>
      </div>

      <div className="form-actions">
        {/* Requisito 4.2 e 4.4: Botão de ação principal com feedback visual e estado disabled */}
        <button 
          type="button"
          className="btn-agro-submit" 
          onClick={handleAction} 
          disabled={!canSubmit} 
        >
          {editingId ? "SALVAR ALTERAÇÕES" : "CADASTRAR STARTUP"}
        </button>
        
        {/* Botão de cancelamento para melhorar a UX na edição */}
        {editingId && (
          <button type="button" className="btn-cancel" onClick={cancelEdit}>
            CANCELAR EDIÇÃO
          </button>
        )}
      </div>
    </section>
  );
};

export default StartupForm;