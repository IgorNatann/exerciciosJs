// Exemplo de operadores relacionais.
// Exemplo de operador de igualdade restrita, onde para ser verdadeiro precisa ser o tipo do dado e literalmente tudo igual para retornar true

console.log("01)", "1" == 1); // Só está comparando o valor, e não consulta o tipo do dado, por isso retorna TRUE
console.log("02)", "1" === 1); // Igualdade restrita, além do valor ter que ser igual, o tipo de dado também tem que ser igual para retornar TRUE!
console.log("03)", "3" != 3); // sinal de diferença, como não compara o tipo de dado, retornara true por que 3 é igual a 3 string.
console.log("04)", "3" !== 3); // Cnnsulta restrita, retorna true, pq os tipo de dados são diferentes! faz consulta do tipo de dado.

console.log("05)", 3 < 2);
console.log("06)", 3 > 2);
console.log("07)", 3 <= 2);
console.log("08)", 3 >= 2);

const d1 = new Date(0);
const d2 = new Date(0);
console.log("09)", d1 === d2);
console.log("10)", d1 == d2);
console.log("11)", d1.getTime() === d2.getTime());

console.log("12)", undefined == null);
console.log("12)", undefined === null);


