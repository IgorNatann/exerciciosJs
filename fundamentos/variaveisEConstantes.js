/* A variável VAR, deixa fazer declarar ela mais de uma vez, ocasionando erros.
Já a LET acusa o não deixa gerar. Mais seguro */

var a = 3; // Declaração de variável !
b = 40;

// Usar sempre LET, mais atual e mais segura
let b = 30;
console.log(a,b);

// Alterando o valor das variáveis
a = 300;
b = 400;

console.log(a,b);

// Constante não pode ser alteradas ao decorrer do código.
const c = 5;
// c = 50; Acusa um erro por ser uma constante.

console.log(c);
