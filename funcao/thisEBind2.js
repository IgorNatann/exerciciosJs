function Pessoa() {
    this.idade = 0

    //Alterando o elemento This para Self
    const self = this
    setInterval(function() {
        self.idade++
        /*this.idade++*/
        console.log(self.idade)
        /*console.log(this.idade)*/ 
    }/*.bind(this)*/, 1000) // Setando com a function Bind que o elemento Pessoa sempre que chamado retornar a execução setada.
};

new Pessoa