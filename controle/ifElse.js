// Exemplo de Estrutura utilizando If e Else 
const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log("Aprovado")
    } else {
        console.log("Reprovado")
    }
}

imprimirResultado(10);
imprimirResultado(4);
imprimirResultado("Epá..."); // Como é uma string, retornara reprovado! 