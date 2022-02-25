/* EXEMPLOS DE ARRAY */
// O que é uma Array?
// Array é um Vetor! No Js se chama Array
// É uma estrutura que permite armazenar mais de um tipo de dados dentro da mesma variável!
// Sendo alocados esses dados e linha, dando ínicio do 0, 1, 2, 3 por diante.. 
// Para acessar essas infromações contidas na Array, baste setar a posição que está armazenada esse dado. exempo 0, 1, 2, 3 etc.
// Sendo uma estrutura linear de armazenamentos.
// Array pode contar String, Int.

// Exemplo básico de alocamento de inteiros dentro da const valores.
const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]); // Setando posição 0 = 7.7 e posição 3 = 9.2 para visualização.

// Exemplo busca de posição Array Inexistente
console.log(valores[4]); // Como não existe a posição 4 na Array, ela não da erro na aplicação por ser uma linguagem fracamente típada, mas retorna como posição " UNDEFINED ".
//Pois não tem nada dentro dela.

// Adicionando uma nova posição e um valor para essa posição dentro da Array " valores "
//Podemos adicionar mais valores ao decorrer da aplicação se necessário.
valores[4] = 10;
console.log(valores);

// Function length aplicada para consultar quantos elementos está contido dentro da uma Let ou Const.
console.log(valores.length); //Exemplo da aplicabilidade da function.
// Bastante utilizada para consultar, pois em sistemas grandes, podemos ter incremento de mais dados.

// Function para adicionar mais elementos dentro da Array desejada! "VALORES"
// Podemos adicionar qualquer tipo de dados a Array
// mas é recomendado separar Array para conter apenas um tipo de dados, Ou String ou Int ou Boolean e etc.
valores.push({id: 3}, false, null, "teste"); // Usando function PUSH para adicionar novos elementos a Array VALORES
console.log(valores);

//Function para excluir ultimo elemento da Array
console.log(valores.pop()); // Function POP Exclui o ultimo elemento da array, nesse caso sera o teste.
//Também é possível setar qual posição desejamos excluir. Exemplo (valores.pop(4)).

//Outra forma de excluir um elemento, Usando DELETE
delete valores[0]; // Nesse caso, estou setando para excluir o elemento da posição 0 contido dentro da Array de valores.
console.log(valores);

console.log(typeof valores); // Consulta do tipo de dado Array valores






