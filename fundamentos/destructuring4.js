// Exemplo ded destructuring em ARRAY
// Validando qual é o menor número

function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
};

console.log(rand([50, 40]));
console.log(rand([992]));
console.log(rand([, 10])); // Definindo apenas o max
console.log(rand([])); // Entre o min e max!
