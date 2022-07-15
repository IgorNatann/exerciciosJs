const escola = "Cod3r"

console.log(escola.charAt(4)); // Function charAt serve para buscar na posição desejada o caracter que está contido.
console.log(escola.charAt(5));

console.log(escola.charCodeAt(3)); // Function charCodeAt retorno o valor/código do caracter em unicode

console.log(escola.indexOf('3')); // Busca e valida se tem algo na posicção 3

console.log(escola.substring(1)); // Function substring pode ser parametrizado para não trazer o caracter de 1 posição.
console.log(escola.substring(0,3)); // Definindo que ele deve começar apresentar da posição 0, sem apresentar a opção de parada, mas indo até ela.

console.log("Escola ".concat(escola).concat(" !!")); // Exemplo de concatenação usando function.
console.log("Escola " + escola + " !!"); // Exemplo de concatenação padrão e que deve ser Utilizado!

console.log(escola.replace(3, "e")); // Function replace(), Usado para efetuar a troca de um caracter por outro, sendo necessário setar a posição e pelo o que deseja substituir.

console.log("Ana,Maria,Pedro".split(",")); // Function split, transforma uma string em uma Array, sendo necessário setar qual simbolo irar separalas.

