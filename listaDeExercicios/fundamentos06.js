/* 
06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos
*/

function capInicial (capitalInicial, taxaDeJuros) {
    resultadoJurosSimples =  capitalInicial * taxaDeJuros

    console.log(resultadoJurosSimples);
}

function tempAplicacao (capitalInicial2, taxaDeJuros2, tempoDeAplicacao) {
    jurosComposto = capitalInicial2 + (capitalInicial2 * taxaDeJuros2 * tempoDeAplicacao)

    console.log(jurosComposto);
}

capInicial(100, 10)
tempAplicacao(100,10,20)

// Resolução 

function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));
