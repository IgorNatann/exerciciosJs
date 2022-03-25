// Call e Apply são formas de chamar uma Function
/* Diferença entre Apply e Call é apenas a forma que passamos os parametros para a function. */
// Em Apply, passamos o parametro por Array, e ele só aceita Arrays como parametros.
// Em Call, passamos os parametros diretamente na função.

function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: "Notebook",
    preco: 4589,
    desc: 0.15,
    getPreco
}


console.log(getPreco()); 
//Chamando a function atraves do objeto produto.
console.log(produto.getPreco());

const carro = {preco: 49990, desc: 0.20}

// Exemplo de tratativa utilizando CALL
console.log(getPreco.call(carro));

// Exemplo de tratativa utilizando Apply
console.log(getPreco.apply(carro));

// Diferença entre Call e Apply na hora de invocar e passar o parametros para Function
// Call, passamos os parametros diretamente no objeto.
console.log(getPreco.call(carro, 0.17, '$'));

// Podemos notas que, em Apply, só será aceitamos parametros passados dentro de uma ARRAY.
console.log(getPreco.apply(carro, [0.17, '$']));