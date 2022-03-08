// Exemplo do ForIn
// Metodo usado para trazer o indice contido dentro da array, não necessáriamente trás o que esta contido no indice.
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: "Igor",
    sobrenome: "Natan",
    idade: 22,
    peso: 64
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}