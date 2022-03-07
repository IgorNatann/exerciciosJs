// Usamos o sinal " [] " ao lado esquerdo da declaração da variável para atribuir uma desestruturação.

const [a] = [10];
console.log(a);

// atribuição em mais de uma variável com desestruturação
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);

const [, [, nota] ] = [[, 8, 8],[9, 6, 8]] // as virgulas estão setando para ignorar os elementos em suas respectivas posições.
console.log(nota);

