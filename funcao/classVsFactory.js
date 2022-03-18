// Exemplo de Class
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

// Function Arrow
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
} 

const p2 = criarPessoa("Igor N")
p2.falar()