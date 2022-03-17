// Exemplo comprovação que o atributo This não sofre alteração sendo chamado.

function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
} 
new Pessoa