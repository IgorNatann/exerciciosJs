// Function Factory nada mais é do que uma Function que retorna objetos, sendo montado a estrutura dentro da função e chamando-a para ser usada futuramente mais facil e fora do escopo.
// Podendo usar  os parametros que estão disponiveis nessa function

// Estrutura Factory.
function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto("Notebook", 2199.49));
console.log(criarProduto("Ipad", 1199.89))


/* Exemplo 2 */

function modelosCelular (nome, preco, marca) {
    return {
        nome,
        preco,
        marca
    }
}

console.log(modelosCelular("Iphone", 1999.99, "Apple"))