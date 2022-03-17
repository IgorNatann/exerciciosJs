
// O Js pega todas as Funções e executa elas e deixa disponíveis para depois carregar a página.
// Dessa forma, chamando a Function antes da criação dela, ele já retorna.
// Já em function Anonima e named Function, respeita a criação em modo cascata, dando erro se chamar a function antes de declarar

console.log(soma(3, 4))
// Function Declaration Padrão
function soma ( x, y ) {
    return x + y
}

// Function Expression Anonima, sem declarar nome para a function

const sub = function ( x, y ) {
    return x - y 
}
console.log(sub(10,5))

// Named function Expression, Função declarada com Nome, pode facilitar na hora de validações em teste, pois conseguiremos identificar facilmente as funções pelo nome.
const mult = function mult ( x, y ) {
    return x * y
}
console.log(mult(2,10))