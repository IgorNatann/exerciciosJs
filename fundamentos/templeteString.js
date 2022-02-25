// Templete String serve para fazer a concatenação de uma forma mais facíl e de melhor visualização no código.
// Para chamar o templete é usado " $ ", Exemplo: CONST game = `ok`
// Estrutura padrão de templete " ` CONTEUDO ${(CONTEUDO)}!` "

const nome = "Rebeca";
const concatenacao = "Ola " + nome + " !";

const templete = ` 
    Ola
    ${nome}!`;
    console.log(concatenacao, templete);

    
const templete2 = `Ola ${nome}!`; // Exemplo de tremplete! Concatenado 
console.log(concatenacao, templete2);


//expressoes
console.log(`1 + 1 = ${1 + 1}`);

// Exemplo de function com apliocação de Templete
const up = texto => texto.toUpperCase(); // Atribuindo a UP uma function de transformação de texto em caixa Alta.
console.log(`Ei.. ${up("cuidado")}!`); // Aplicando templete em um texto setado. * ESTRUTURA PADRÃO *
