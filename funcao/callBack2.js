// Aplicando CallBack em uma Function
// Callback é retorno de uma ação.

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem usar callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)


// Com CallBack, validação em true or false
const notasBaixas2 = notas.filter(function (nota) { // usando Filter para filtrar dentro do array notas as notas < 7
    return nota < 7 // Retornando apenas as notas < 7
})
console.log(notasBaixas2)

// Com CallBack Utilizando Array
// Estrutura mais utilizavel.
const notasMenorQue7 = nota => nota < 7;
const notasBaixas3 = notas.filter(notasMenorQue7);
console.log(notasBaixas3);