# AgroTech Connect - Sistema de Gestão de Startups
Este projeto é o Projeto Final de Módulo da disciplina de Desenvolvimento Web (ADS - 5º e 6º Termo). Ele consiste na evolução do sistema projeto_agro_v3, integrando uma API Node.js com uma interface moderna em React.

# Tecnologias e Ferramentas (Módulos 1 ao 5)
Backend: Node.js, Express, Cors e Nodemon.

Frontend: React.js (Hooks: useState, useEffect) com Vite.

Estilização: CSS3 Moderno (Identidade Visual Customizada).

Versionamento: Git & GitHub (Histórico de commits organizado por etapas).

# Implementações Realizadas (Critérios de Avaliação)
Conforme as especificações do Prof. Esp. Miguel Leme, os seguintes itens foram entregues:

1. Campo Ano de Abertura (Item 4.1)
[x] Inclusão do campo Ano de Abertura (tipo number) no formulário de cadastro.

[x] Validação de intervalo (1900 até 2026).

[x] Exibição dinâmica nos cards da listagem e no modal de detalhes.

2. Identidade Visual Aprimorada (Item 4.2)
[x] Paleta de Cores: Estética recalibrada com tons profissionais de verde e ciano, focada no setor agrícola.

[x] Hierarquia Visual: Tipografia clara e espaçamentos consistentes.

[x] Feedback: Efeitos de hover e estados de foco em botões e cards.

3. Modal & Cards Animados (Item 4.3)
[x] Grid responsivo de cards com animações de entrada (Fade-in/Slide-up).

[x] Efeito de elevação (box-shadow) e scale ao passar o mouse.

[x] Modal funcional com overlay escuro para visualização completa dos dados.

4. Gestão de Dados - CRUD Completo (Módulos 7, 8 e 9)
[x] Create: Cadastro via formulário com persistência em JSON.

[x] Read: Listagem dinâmica consumindo a rota GET do backend.

[x] Update: Botão Editar que abre formulário pré-preenchido para atualização de dados.

[x] Delete: Botão Excluir com confirmação de segurança antes da remoção.

# Como Executar o Projeto
Passo 1: Iniciar o Backend
PowerShell
# Na raiz do projeto (C:\ProjetoAgro)
npm install
npm run dev
# O servidor rodará em http://localhost:3000
Passo 2: Iniciar o Frontend
PowerShell
# Em outro terminal, na pasta frontend
cd frontend
npm install
npm run dev
# Acesse o link exibido (geralmente http://localhost:5173)
Identificação do Aluno
Desenvolvedor: Rafael Buosi Jardim - 5º Termo

Curso: Análise e Desenvolvimento de Sistemas (ADS)

Instituição: Faculdade Reges de Ribeirão Preto

Professor: Esp. Miguel Leme

# Observações de ADS
O projeto utiliza a arquitetura de Modularização (Pasta src/ para o backend).

Configurado com type: module no package.json para uso de imports modernos.

Histórico de commits organizado para demonstrar a evolução lógica do desenvolvimento.