/* 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,multiplicação e divisão desses valores. */

// Forma que eu resolvi o exercício!
function calcularOperacoes (a, b) {
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
}

calcularOperacoes(10, 2);

// Resolução do problema curso.

function calcOperacoes (operador1, operador2) {
    console.log(operador1+operador2, operador1-operador2, operador1*operador2, operador1/operador2);
}

calcOperacoes(10, 5);