// Exemplo de estrutura com this
const pessoa = {
    saudacao: "Bom dia!",
    falar() { // Adicinando a ação de saudação a Function falar!
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar(); // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // Bind é usado para fazer amarração com o elemento this desejado. garantido que sempre que chamado ele vai está apontando para o lugar certo.
falarDePessoa();