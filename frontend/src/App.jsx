/*
 Projeto: AgroTech Connect - Gestão de Startups
 Disciplina: Análise e Desenvolvimento de Sistemas - ADS
 Instituição: Rede Gonzaga de Ensino Superior (REGES) - RIBEIRÃO PRETO
 Autor: Rafael Buosi Jardim, 5º termo
 Referência: Projeto base fornecido pelo Prof. Esp. Miguel Leme
*/

import React, { useState, useEffect } from 'react';
import './App.css';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import StartupForm from "./components/form/form";
import StartupCard from "./components/startupCard/startupCard";
import Drawer from "./components/drawer/drawer";
import DetailsModal from "./components/modal/modal";

function App() {
  const [startups, setStartups] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [isDark, setIsDark] = useState(true);
  const [isDrawer, setIsDrawer] = useState(false);
  const [selectedStartup, setSelectedStartup] = useState(null); 
  const [formData, setFormData] = useState({ nome: '', anoAbertura: '', especialidade: '' });

  const API_URL = 'http://localhost:3000/startups';
  const currentYear = new Date().getFullYear();

  // Requisito 4.3: Listagem de Startups consumindo a API
  const fetchStartups = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setStartups(data);
    } catch (err) { console.error("Erro ao buscar dados:", err); }
  };

  useEffect(() => { fetchStartups(); }, []);

  // Requisito 4.1: Validação do Ano de Abertura (Mínimo 1900 e Máximo Ano Atual)
  const isYearValid = formData.anoAbertura !== '' && 
                      parseInt(formData.anoAbertura) >= 1900 && 
                      parseInt(formData.anoAbertura) <= currentYear;
  
  // Requisito 4.1: Validação de obrigatoriedade dos campos para o cadastro
  const isFormValid = formData.nome.trim() !== '' && 
                      formData.especialidade.trim() !== '' && 
                      isYearValid;

  const handleAction = async () => {
    const payload = { ...formData, anoAbertura: parseInt(formData.anoAbertura) };
    const method = editingId ? 'PUT' : 'POST';
    const url = editingId ? `${API_URL}/${editingId}` : API_URL;

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      setFormData({ nome: '', anoAbertura: '', especialidade: '' });
      setEditingId(null);
      fetchStartups();
    }
  };

  return (
    // Requisito 4.2: Feedback visual de tema (Dark/Light) e layout moderno
    <div className={`app-wrapper ${isDark ? '' : 'light-theme'}`}>
      <Drawer isOpen={isDrawer} onClose={() => setIsDrawer(false)} />
      
      {/* Requisito 4.3: Modal com todos os dados detalhados ao clicar no card */}
      {selectedStartup && (
        <DetailsModal 
          startup={selectedStartup} 
          onClose={() => setSelectedStartup(null)} 
        />
      )}

      <Header isDark={isDark} setIsDark={setIsDark} setIsDrawer={setIsDrawer} />
      
      <main className="main-layout">
        <h1 className="page-title">
          {editingId ? "Editar Startup" : "Cadastrar Nova Startup"}
        </h1>
        
        {/* Requisito 4.1: Formulário com campo Ano de Abertura implementado */}
        <StartupForm 
          formData={formData} 
          handleInputChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})} 
          isFormValid={isFormValid}
          handleAction={handleAction} 
          editingId={editingId}
          cancelEdit={() => { setEditingId(null); setFormData({nome:'', anoAbertura:'', especialidade:''}); }}
        />

        {/* Requisito 4.3: Grid responsivo de cards animados */}
        <div className="startup-grid">
          {startups.map(s => (
            <StartupCard 
              key={s.id} 
              startup={s} 
              onCardClick={(data) => setSelectedStartup(data)} // Requisito 4.3: Clique abre o modal
              
              // Requisito 4.4: Botão Editar - Abre formulário pré-preenchido
              handleEdit={() => { 
                setEditingId(s.id); 
                setFormData(s); 
                window.scrollTo(0,0); 
              }}
              
              // Requisito 4.4: Botão Excluir - Com confirmação antes de deletar
              handleDelete={async () => {
                if(window.confirm(`Deseja excluir ${s.nome}?`)) {
                  await fetch(`${API_URL}/${s.id}`, { method: 'DELETE' });
                  fetchStartups();
                }
              }}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;