// Estrutura de repetição com While, estabelecendo um limite!
let contador = 1 // Declarando contador que está controlando o laço
while(contador <= 10) { // Expressão definindo até onde deve executar
    console.log(`contador = ${contador}`)
    contador++ // Incremento 
}

// For é o mais recomendando para esse cenário, onde será definido tudo resumidamente.
// Definindo o contador, o parametro de até onde deve ser executado e o Incremento.
for (let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}

// Estrutura de repetição usando ARRAY
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (let i = 0; i < notas.length; i++) { // Length é utilizado para verificar e navegar dentro da Array
    console.log(`nota = ${notas[i]}`)
}
