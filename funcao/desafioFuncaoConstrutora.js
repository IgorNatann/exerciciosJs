// Transformando uma Class em uma Function Construtora
function Pessoa(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa ("Igor Natan")
p1.falar()

/*
class Pessoa {
    constructor (nome) {
        this.nome = nome
    }

    falar() { // Definindo nome para acesso local
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa ("Igor Natan")
p1.falar()
*/