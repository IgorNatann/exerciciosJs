let valor; // não inicializada
console.log(valor); // retorna undefined, pois ela foi declarada, mas não foi inicializada.

valor = null; // ausência do valor. não aponta pra nenhum llugar na memoria.
console.log(valor);// retorna Null, pois declarei como NULL.
// Sempre definir como null quando for necessario zerar a variável.

//console.log(valor.toString()); // Retorna um Erro, pois não é possível convertar um valor Null para string

const produto = {}
console.log (produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; // evitar atribuit undefined.
console.log(!!produto.preco);
// delete produto.preco , deletando o conteudo armazenado em preço
console.log(produto);

produto.preco = null // sem preço.
console.log(!!produto.preco); // Conferindo se o preço contem alguma informação setada.
console.log(produto);