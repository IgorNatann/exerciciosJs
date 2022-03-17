// Exemplo de Estrutura If Else If encadeado

// Definição de função
Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

// Parametrização!
const imprimirResultado = function (nota) {
    if (nota.entre(9,10)) {
        console.log("Quadro de Honra")
    } else if (nota.entre(7, 8.99)) {
        console.log("Aprovado")
    } else if (nota.entre(4, 6.99)) {
        console.log("Recuperação")
    } else if (nota.entre(0, 3.99)) {
        console.log("Reprovado Mané")
    } else { // Saida final caso não entre em nenhuma opção setada
        console.log("Nota inválida")
    }

}

imprimirResultado(10);
imprimirResultado(8.9);
imprimirResultado(6.55);
imprimirResultado(3.97);
imprimirResultado(-1);
imprimirResultado(11);