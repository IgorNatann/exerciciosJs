// Factory Simples
// Uma Factory é uma Function que sempre retorna um objeto

function criarPessoa () {
    return {
        nome: "Igor",
        sobrenome: "Natan"
    }
}

console.log(criarPessoa())