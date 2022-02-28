// Por conta do Var não respeitar o bloco, o resultado final adicionado ao valor de i exibido no console,
// sempre será 10, pois está pegando o ultimo valor atribuido ao i
// sendo assim ,n deixando visivel qual o valor de i em certas posições

var funcs = []

for ( var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
};

funcs[2]();
funcs[8]();