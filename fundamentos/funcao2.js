// Armazenando uma função em uma variável
const imprimirSoma = function  (a, b) {
    console.log( a + b)
};

imprimirSoma (2, 3);

// Armazenando uma função ARROW em uma variável 
//  " => " Usado para substituir a palavra function chamdo de ARROW
const soma = (a , b) => {
    return a + b
};

console.log(soma(2,3));

// retonor implícito 
const subtracao = (a, b) => a - b; // Definindo uma função da forma resumida!
console.log(subtracao(2, 3));

// Declarando função com apenas um retorno.
const imprimir2 = a  => console.log(a);
imprimir2("Legal!!!");