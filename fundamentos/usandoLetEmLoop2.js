// Nesse caso, como Let respeita a estrutura de blocos, ao consultar as posições de i em cada incrimento, retorna certo!
// Escopo de bloco respeito por let
// Tornando possível consultar as posições.

const funcs = []

for ( let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
};

funcs[2]();
funcs[6]();
funcs[8]();
