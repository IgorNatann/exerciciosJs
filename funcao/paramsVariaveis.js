function soma () {
    let soma = 0
    // Usamos o IN para conseguir acessar os index dos arrays!
    for (i in arguments) { // ARGUMENTS é um ARRAY interno que vai armazenar todos os parametros passados pelo úsuario. utilizado para fazer a checagem dos parametros passados. 
        soma += arguments[i] // Acessando todos os elementros que foram passados pelo úsuario
    }
    return soma
}

console.log(soma());
console.log(soma(1));
console.log(soma(1.1, 2.2, 3.3)); // Não tem limite de parametro definidos para essa function executar!

// Teste adicionando String, não gera erro, faz a concatenação
console.log(soma(1.1, 2.2, "Teste"));
console.log(soma("a","b", "c"))