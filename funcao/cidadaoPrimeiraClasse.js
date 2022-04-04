// Função em JS é First-Class Object (Citizens)
// Higher-order function

// Criando uma function de forma literal 
 function fun1(param) { }

 // Armazenar uma function em uma VARIÁVEL
 const fun2 = function (param) { }

 // Armezenando uma function em uma ARRAY
 // Não é a forma mais correta de se usar dentro de uma ARRAY!
 const array = [function (a, b) { return a + b}, fun1, fun2] // Estrutura valida!
 console.log(array[0](2,3));

 // Armanezando em um atributo de objeto
 const obj = {}
 obj.falar = function () { return "Opa"}
 console.log(obj.falar())

 // Passar função como parametro
function run(fun) {
    fun()
}
run(function () {console.log("Executando...")})

// Uma função pode retorna/conter uma função
function soma (a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma (2,3)(5)