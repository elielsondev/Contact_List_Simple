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
menu = "";

do {
    menu = prompt(`
        Escolha uma opção: 
        1 - Adicionar, 
        2 - Listar, 
        3 - Buscar, 
        4 - Atualizar, 
        5 - Remover 
        Ou digite "sair" para sair a qualquer momento.
    `).toLowerCase();

    switch (menu) {
        case "1":
        // • Cadastrar contato (validar duplicados).
            let contactName = prompt("Digite o nome do contato:");
            let contactPhone = prompt("Digite o telefone do contato:");
            let contactEmail = prompt("Digite o email do contato:");

            addContact(contactName, contactPhone, contactEmail);
            break;
    
        case "2":
            // • Listar todos os contatos no console.
            for (let i = 0; i < contacts.length; i += 1) {
                console.log(`
                ------------------------
                Contato ${i + 1}:
                ------------------------
                Nome: ${contacts[i][0]}
                Telefone: ${contacts[i][1]}
                E-mail: ${contacts[i][2]}
                `);
            };
            console.log("Fim da lista.");
            break;

        case "3":
            // • Buscar contatos pelo nome (parcial ou completo).
            let searchName = prompt("Digite o nome do contato que deseja buscar:");
            
            for (let i = 0; i < contacts.length; i += 1) {
                if (contacts[i][0].toLowerCase().includes(searchName.toLowerCase())) {
                    console.log(`
                    ------------------------
                    Contato ${i + 1}:
                    ------------------------
                    Nome: ${contacts[i][0]}
                    Telefone: ${contacts[i][1]}
                    E-mail: ${contacts[i][2]}
                    `);
                }
            };
            break;

        case "4":
            // • Atualizar contato existente.
            let updateName = prompt("Digite o nome do contato que deseja atualizar:");
            
            for (let i = 0; i < contacts.length; i += 1) {
                if (contacts[i][0].toLowerCase() === updateName.toLowerCase()) {
                    let updatePhone = prompt("Digite o novo telefone do contato:");
                    let updateEmail = prompt("Digite o novo email do contato:");

                    contacts[i][1] = updatePhone;
                    contacts[i][2] = updateEmail;

                    console.log("Contato atualizado com sucesso!");
                }
            }
            break;
        
        case "5":
            // • Remover contato da lista.
            let removeName = prompt("Digite o nome do contato que deseja remover:");
            
            for (let i = 0; i < contacts.length; i+= 1) {
                if (contacts[i][0].toLowerCase() === removeName.toLowerCase()) {
                    // Remover contato usando splice
                    // fonte: https://cursos.alura.com.br/forum/topico-duvida-remover-uma-posicao-especifica-no-array-260328
                    // splice - remove 1 elemento de índice 2
                        // arr = [0, 1, 2, 3, 4 ,5];
                        // arr.splice(2,1); 
                        // console.log(arr); // [0, 1, 3, 4, 5]
                    
                    // splice - remove 3 elementos a partir do índice 1 
                        // array = [0, 1, 2, 3, 4 ,5];
                        // array.splice(1,3); 
                        // console.log( array ); // [0, 4, 5]
                    
                    contacts.splice(i, 1);
                    console.log("Contato removido com sucesso!");

                    // Obs.: Na fonte com o exemplo de remover com splice(), 
                    // também tem exemplos com o indexOf() e o filter().
                }
            };
            break;

        case "sair":
            console.log("Saindo...");
            break;

        default:
            console.log("Opção inválida, tente novamente.");
            break;
    }

} while (menu !== "sair");

// Agenda de Contatos
// Simples

// Conceitos usados:

// •Arrays ou matrizes para guardar nome, telefone e email.
// •Estruturas condicionais para buscar ou validar duplicatas.
// •Repetições para listar todos os contatos.

// Extra: permitir atualizar ou excluir um contato.