function carro (velocidadeMaxima = 200, delta = 5) {
    // Criando Atributo Privado que só está disponível para uso dentro da function
    let velocidadeAtual = 0

    // Criando atributo de metodo público que pode ser usado e chamado dentro e fora da estrutura.
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo público, tornando a velocidade atual em um atributo público
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

// Usando elementos já estabelecidos na function Carro
const uno = new carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

// Sobrescrevendo elementos contido na Function e transformando ferrari em um Objeto.
const ferrari = new carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())