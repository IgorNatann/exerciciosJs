/* Definições de dados tipo BOOLEAN */

// Setando que a variável isAtivo é falso.
let isAtivo = false;
console.log(isAtivo);

// Setando que a variável isAtivo agora é tipo true.
isAtivo = true;
console.log(isAtivo);


// Caracter " ! " é definição de negação. Transforma o conteudo contido na variável em FALSO!!!
// Utilizando ele duas vezes, !! transforma e obriga o conteudo a ser tipo BOOLEAN, tornando possível a validação real se é um FALSE = 0 e TRUE = 1 .
// Utilizando apenas uma negação, ele faz a checagem correta, sendo 0 True e 1 False.
isAtivo = 1;
console.log(!isAtivo); // Retornara FALSE , por que apenas uma negação, transforma o dado em negativo.
console.log(!!isAtivo); // Retornara TRUE, pois !! duas negações transforma o conteudo da variável em um tipo booelan, onde 0 = FALSE e 1 = TRUE .


// Todos os números inteiros com exceção do 0 são e dão retorno de verdadeiros. 
// Números negativos inteiros também recebem o status de verdadeiro.
// Todos esses elementos retornam verdadeiro.
console.log("Os verdadeiros...");
console.log(!!3); // Retornara TRUE porque 3 é um valor inteiro !!!
console.log(!!-1);
console.log(!!" "); // Contendo algum espaço, ele retorna como verdadeiro
console.log(!!" teste ");
console.log(!![]); // tendo um conteudo com espaço ele retornara TRUE
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true)); // Como TRUE está setado como TRUE , ele retornara TRUE.


// Exemplos que retornaram falso
console.log("os falsos...");
console.log(!!0); // FALSE pq ele é o resultado de FALSE
console.log(!!""); // Não contendo nenhum espeço ou conteudo na expressão ele retorna como false.
console.log(!!null); 
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false)); // Atribuição que predomina é a descrita no canto direito. então esse dado está setado que retornará falso.

// exemplo validação OR
console.log("pra finalizar....");
console.log(!!("" || null || 0 || " ")); // Nessa validação OR, a expressão está contendo espaço vazio, como todas expressões precisam ser false para retornar false, irá retornar TRUE.

// Checagem e substituição de frase caso a variável nome não sejá preenchida.
// Como ela chega usando a expressão OR , nome não estabelecido, retorna como verdadeiro e faz a substituição do vazio por Desconhecido.
let nome = "";
console.log(nome || "Desconhecido");

// Exemplo de validação se estiver preenchido permaneça o nome.
let nome1 = "Igor";
console.log(nome1 || "Desconhecido");