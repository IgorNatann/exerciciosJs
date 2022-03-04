// Notação Ponto é o " . " Que usamos para acessar alguma função ou atributo.
// Exemplo

// Usando o " . " para acessar uma função dentro do objeto MATH
console.log(Math.ceil(6.1)); // função ceil arredonda o valor para o proximo número inteiro!


const obj1 = {}; // criando um objeto
obj1.nome = "Bola"; //  Usando " . " para adicionar um objeto a CONST obj1! 
console.log(obj1.nome); // Usando o ponto para definir que deve buscar dentro do obj1 a atribuição Nome.


// Deixando um objeto dentro de function publico para acessar dentro da function
function Obj (nome) {
    this.nome = nome
    this.exec = function() {
        console.log("Exec...")
    }
};

// Criando mais duas const e acessando com a notação 
const obj2 = new Obj("Cadeira");
const obj3 = new Obj("Mesa");
console.log(obj2.nome); // Está sendo possível acessar essa função por que eu a tornei publica usando a notação THIS
console.log(obj3.nome);
obj3.exec();
