// Exemplo de sobreescrita de variável global e por que não usar!

var numero = 1;
{
    var numero = 2;
    console.log("Dentro = ", numero);
}
console.log("Fora = ", numero);

// Está retornando duas vezes o 2, tando fora quanto dentro, porque é uma variável global!
// Não respeita o escopo e faz alteração a qualquer momento.