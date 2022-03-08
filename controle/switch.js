// Estrutura Switch
// Switch é utilizado para substituir o If else If, sendo uma estrutura de repetição multipla e relacional.
// Break é mais que importante para não deixar sair executando todas as estruturas

const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) { // floor função para arredondar um número para baixo.
        case 10: // Dentro do switch só podemos definir valores Inteiros!
        case 9:
            console.log("Quadro de Honra")
            break // em switch o break é utilizado para caso seja executado a estrutura, ele finalize dentro dela, não deixando ser exexutando as demais.
        case 8:
        case 7:
            console.log("Aprovado")
            break
        case 6: 
        case 5:
        case 4:
            console.log("Recuperação")
            break
        case 3:
        case 2:
        case 1:
        case 0:
            console.log("Reprovado")     
            break
        default: // setando que se não entrar em nenhuma estrutura, deverá retornar esse alerta.
            console.log("Nota inválida")                               
    }
}

imprimirResultado(10);
imprimirResultado(8.9);
imprimirResultado(6.55);
imprimirResultado(2.3);
imprimirResultado(-1);
imprimirResultado(11);