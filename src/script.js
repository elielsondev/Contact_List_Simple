console.log("Script loaded successfully!");

// Objetivo: Criar uma agenda simples para armazenar contatos.

// Requisitos:
// • Cada contato deve ter: nome, telefone e email.
let contactName = prompt("Digite o nome do contato:");
let contactPhone = prompt("Digite o telefone do contato:");
let contactEmail = prompt("Digite o email do contato:");

// • Usar uma matriz para armazenar os contatos (cada linha = um contato).
let contacts = [];

// Função para adicionar contato
function addContact(name, phone, email) {
    contacts.push([ name, phone, email ]);
    console.log("Contato adicionado com sucesso!");
};

addContact(contactName, contactPhone, contactEmail);
console.log(contacts[0]);

// • Funcionalidades obrigatórias (menu interativo com prompt):
// • Cadastrar contato (validar duplicados).
// • Listar todos os contatos no console.
// • Buscar contatos pelo nome (parcial ou completo).
// • Atualizar contato existente.
// • Remover contato da lista.

// Agenda de Contatos
// Simples

// Conceitos usados:

// •Arrays ou matrizes para guardar nome, telefone e email.
// •Estruturas condicionais para buscar ou validar duplicatas.
// •Repetições para listar todos os contatos.

// Extra: permitir atualizar ou excluir um contato.