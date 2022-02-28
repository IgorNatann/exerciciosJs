// FUNÇÃO É UM BLOCO DE CÓDIGO NOMEADO *
// Conceito de Função
// Função é um bloco de código.
// Onde é setado um Nome para essa função.
// Essa função recebe parametros para efetuar algo.
// Podendo receber dados de entrada para retornar alguma coisa!
// Função executa um processo, agrupando um processo definido.
// podendo ser setado em diversos trexos do código para executar algo.


// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
};

imprimirSoma(2,3);

imprimirSoma(2); // Como foi passado apenas o valor para o "A", retornara um NaN, Note a number! porque o segundo número não foi setado.
imprimirSoma(2, 10, 20, 30, 50); // Como possui apenas duas variáveis declaradas, A e B , ele atribuira os dois primeiros valores e ignora os outros, pq não tem onde armazenar.
imprimirSoma(); // Retornara NAN, pois não foi declardo nenhum número.

// Função com retorno
function soma(a, b = 1) {
    return a + b
};

console.log(soma(2,3));
console.log(soma(2)); // Atribuindo apenas o valor do A, pois o B já está contendo um valor pré definido.
console.log(soma()); // Retornará NaN, pois não foi estabelecido nenhum parametro para a função.