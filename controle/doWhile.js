function getInteiroAleatorioEntre (min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// Do muda a estrutura, faz a validação após executar o código.
let opcao = -1 // Permitido iniciar a variável sem valor inicial

do {
    opcao = getInteiroAleatorioEntre (-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log("Até a próxima")