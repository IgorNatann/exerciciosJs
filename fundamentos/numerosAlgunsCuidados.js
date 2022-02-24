console.log( 7 / 0); // JS não da problemas com LOOP INFINITO. para precaver esses problemas, ele da um tipo de dados infinity
console.log("10" / 2); // JS também pega dados dentro de uma string, podendo validar se é um tipo INT ou não. caso tiver junto ao número uma letra, ira dar ruim!!!!
console.log("show!" * 2); // Não retorna nada.
console.log(0.1 + 0.7); // Não retornara o valor de 0.8, ele quebra e retorna 0.79, pois é uma tratativa mais rapída.
console.log((10.345).toFixed(2)); // Tratativa que fixa para aparecer apenas duas casas decimais.