let num1 = 1;
let num2 = 2;

num1++ // Ordem de importancia está incrementando após executar.
console.log(num1);
--num1 // Incrementa antes de executar, apressadinho kkk
console.log(num1);

console.log(++num1 === num2--); // Retornara falso, pois o num2 está sendo incrementando após a verificação, Usar sempre incremento antes da variaveis 
console.log(num1 === num2);