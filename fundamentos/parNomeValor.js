// PAR NOME/VALOR
// Podemos declarar Lets ou const com os mesmo nome, Uma estando armazenada dentro de uma function e a outra sendo global.
// Não é possível declarar duas LET globais!

const saudacao = "Opa"; // contexto léxico 1

function exec() {
    const saudacao = "FALA CMG" // contexto léxico 2
    return saudacao
};

// Objetos são grupos aninhados de CHAVES E VALOR
// Exemplo
const Cliente = {
    nome: "Igor",
    idade: 22,
    peso: "82.3",
    endereco: {
        logradouro: "Rua muito legal",
        número: 123
    }
};

console.log(saudacao); // Consultando informação Global 
console.log(exec()); // Consultando informção contida dentro da function.
console.log(Cliente);
