/*
 Projeto: AgroTech Connect - Gestão de Startups
 Disciplina: Análise e Desenvolvimento de Sistemas - ADS
 Instituição: Rede Gonzaga de Ensino Superior (REGES) - RIBEIRÃO PRETO
 Autor: Rafael Buosi Jardim, 5º termo
 Referência: Projeto base fornecido pelo Prof. Esp. Miguel Leme
*/

/* 
 Requisito 4.1: Atributo obrigatório (Ano de Abertura) conforme especificação do edital
 Requisito 4.3: Nome da Startup para exibição em Cards e Modais
 Requisito 4.3: Especialidade para filtragem e categorização no sistema Agro
 Requisito 4.4: Identificador único necessário para operações de exclusão e edição
*/
const startups = [
    { id: 1, nome: "AgroFácil", especialidade: "Drones", anoAbertura: 2018 },
    { id: 2, nome: "EcoSolo", especialidade: "Sensores", anoAbertura: 2020 }
];

/*
 Requisito 5: Organização e Boas Práticas.
 Exportação modular para garantir o reuso do array no componente principal (App.js).
 */
export default startups;