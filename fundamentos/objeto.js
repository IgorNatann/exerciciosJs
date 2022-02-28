// Objeto nada mais é do que declaração continua dentro de chaves {}, conjunto de valores e cahves.
// Podendo ser uma String  ou INT


// Um Objeto é declado por " {} "
// Criação de objetos
// Podemos declarar um objeto como vazio e ir atribuindo valores para ele.
const prod1 = {}
prod1.nome = "Celular Ultra Mega";
prod1.preco = 4550.90;
prod1["Desconto Legal"] = 0.40; // Evitar atributos com espaço.

console.log(prod1);

// Forma mais correta de declaração de um objeto é dessa forma.
const prod2 = {
    nome: "Camiseta Polo",
    preco: 79.90
}

console.log(prod2);