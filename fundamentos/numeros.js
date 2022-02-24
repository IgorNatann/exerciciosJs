/* EXPLICAÇÃO TIPO DE DADO NÚMERICO */

const peso1 = 1.0; // Declaração padrão
const peso2 = Number('2.1'); // Declaração com Function

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); // IsInteger, consulta se o tipo de dado armazenado na variável é Inteirou ou não!
console.log(Number.isInteger(peso2)); // Números como " 1.0 , 2.0 , 3.0 são considerados como inteiros nesse teste, somente números quebrados q não serão inteiros "


 // Explicação sobre tratativa de casas decimais

const avaliacao1 = 9.971;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media);
console.log(media.toFixed(2)); // toFixed(quantidade de casas decimais) = Comando utilizado para definir quantas casas decimais deve aparecer, formatação do valor para melhor visualização.
console.log(media.toString()); // toString() = Transforma um valor INT em STRING.
console.log(media.toString(2)); // toString(2) = Transforma o valor INT em valor BINARIO.

console.log(typeof Number); // Number é uma função.

// Podemos adicionar diversar opções de Functions as variáveis ou constantes. Chamando atraves do " . " exemplo media.toFixed, media.toString

