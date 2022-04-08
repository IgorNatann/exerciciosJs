/* 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores. */

// Forma que eu resolvi o exercício!
function calculoDividendo (dividendo, divisor) {
    resultado = Math.floor(dividendo / divisor) // usando a biblioteca Math.flor para converter o valor do resto número de ponto flutuanete em um inteiro
    resto = dividendo%divisor // Usando o % para descobrir o resto da divisão
    
}
calculoDividendo(11,4)
console.log("O resultado da divisão é " + resultado + " O resto da divisão é " + resto);

// Resolução do problema curso.

function divisao (dividendoo, divisorr) {
    console.log("Resultado: " + Math.floor(dividendoo/divisorr));
    console.log(`Resto: ${dividendoo % divisorr}`);
}
divisao(11,4)