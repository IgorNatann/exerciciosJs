// Destructuring em Function

function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
};

// Criando objeto para simplicar busca
const obj = { max: 50, min: 40 }

console.log(rand(obj));
console.log(rand({min: 955})); // Como o max já está definido, estou setando apenas o min
console.log(rand({})); // Como valores já está setados e desestruturados, ele fica rodando entre max e min
