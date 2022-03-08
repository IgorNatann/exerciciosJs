// Exemplo de estrutura de repetição While própria para ser aplicada quando é necessário executar indeterminadamente
// Estrutura While é apropriada para quando é um caso onde não sabemos quantas vezes será executada essa repetição.
// Podendo estabelecer um Stop para que ele execute até encontrar esse ponto de Stop! 
// Resumindo, será repetido indeterminadamente até o seu ponto final setado.
// A estrutura While pode ser executada muitas vezes/indeterminadas.

function getInteiroAleatorioEntre (min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
};

let opcao = 0 
// let opcao = -1 Não podemos iniciar a estrutura já com o valor setado como Stop! Não iniciara. Pois ele passara a ser Igual a -1. 

// Setando para que seja diferente de -1! e para executar enquanto for diferente. quando encontrar o -1 ele passa a ser igual e saira do laço!
while (opcao != -1) { // While precisa de um paramêtro de True or False. para que ele execute até ser true e pare quando encontrar o False. Vice/Versa
    opcao = getInteiroAleatorioEntre (-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log("Até a próxima!")