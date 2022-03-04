// Tratativa de Objetos/Funções.
// Podemos transformar uma função em um Objeto.

// Exemplo
console.log(typeof Object);
// Transformando uma função em um objeto:
console.log(typeof new Object); 

// Transformando uma function estabelecida em Objeto
const Cliente = function() {};
console.log(typeof Cliente);
console.log(typeof new Cliente);

// Transformando uma Class em Objeto.
class Produto {}; // ES 2015 (ES6)
console.log(typeof Produto);
console.log(typeof new Produto());