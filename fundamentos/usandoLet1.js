// LET, ela já respeita o escopo de chaves {}
// Se a LET declarada fora de um escopo, sendo globalmente tendo um valor, e usando a mesma dentro de uma escopo para alterar a informação,
// Ela respeitará o Escopo, sendo a ordem de prioridade, o conteudo contido dentro das chaves e em segundo o conteudo global.

// LET tem escopo de bloco, global e de function.
// Por esse motivo de ela ter o escopo de bloco, o valor declarado dentro das chaves está sendo respeitado e mantido.
let numero = 1;
{
    let numero = 2;
    console.log("Dentro = ", numero);
}
console.log("Fora = ", numero);