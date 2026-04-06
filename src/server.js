/*
 Projeto: AgroTech Connect - Gestão de Startups
 Disciplina: Análise e Desenvolvimento de Sistemas - ADS
 Instituição: Rede Gonzaga de Ensino Superior (REGES) - RIBEIRÃO PRETO
 Autor: Rafael Buosi Jardim, 5º termo
 Referência: Projeto base fornecido pelo Prof. Esp. Miguel Leme
*/

import express from 'express';
import cors from 'cors';
import listaStartups from './startups.js'; 

const app = express();
const port = 3000;

app.use(cors()); 
app.use(express.json()); 

// GET: Listar (Requisito 4.1 e 4.3 - Fornece dados para Cards e Modal)
app.get('/startups', (req, res) => {
  res.json(listaStartups);
});

// POST: Criar com validação de ano (Requisito 4.1)
app.post('/startups', (req, res) => {
  // Requisito 4.1: Recebimento do campo 'anoAbertura' como obrigatório
  const { nome, especialidade, anoAbertura } = req.body;
  const ano = parseInt(anoAbertura);
  const anoAtual = new Date().getFullYear();

  // Requisito 4.1: Validação - Ano entre 1900 e o ano atual
  if (ano < 1900 || ano > anoAtual) {
    return res.status(400).json({ erro: "Ano inválido (1900 - atual)" });
  }

  const novoId = listaStartups.length > 0 ? listaStartups[listaStartups.length - 1].id + 1 : 1;
  
  // Requisito 4.1: Persistência do campo 'anoAbertura' no objeto da Startup
  const novaStartup = { id: novoId, nome, especialidade, anoAbertura: ano };

  listaStartups.push(novaStartup);
  res.status(201).json(novaStartup);
});

// PUT: Editar (Requisito 4.4)
app.put('/startups/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = listaStartups.findIndex(s => s.id === id); 
  
  if (index !== -1) {
    // Requisito 4.4: Atualização funcional do registro após edição
    listaStartups[index] = { 
      ...listaStartups[index], 
      nome: req.body.nome, 
      especialidade: req.body.especialidade, 
      // Mantendo a consistência do campo obrigatório (Requisito 4.1) na edição
      anoAbertura: parseInt(req.body.anoAbertura) 
    };
    res.json(listaStartups[index]);
  } else {
    res.status(404).json({ erro: "Não encontrada" });
  }
});

// DELETE: Excluir (Requisito 4.4)
app.delete('/startups/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = listaStartups.findIndex(s => s.id === id);
  
  if (index !== -1) {
    // Requisito 4.4: Remoção efetiva do registro da lista
    listaStartups.splice(index, 1);
    res.status(200).json({ mensagem: "Removido" });
  }
});

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));