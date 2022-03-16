// ArrowFunction é uma Forma resumida de criar uma Function
// Ela já por si cria o This constante e return implícito.

// Exemplo de criação de Function Normal
let dobro = function (a) {
    return 2 *a 
}

// Primeiro exemplo de criação de ArrowFunction
dobro = (a) => {
    return 2 * a 
}

// Exemplo de ArrowFunction coom return implícito
dobro = a => 2 * a 
console.log(dobro(Math.PI))

let ola = function () {
    return "Olá"
}
console.log(ola());
 
//Exemplos de criação de ArrowFunctions
ola = () => "Olá"
ola = _ => "Olá"
console.log(ola())