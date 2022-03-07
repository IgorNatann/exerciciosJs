function tratarErroELancar (erro) {
    throw new Error ("Erro Inesperado") // Throw significar lançar 
    //throw 10
    //throw true
    //throw "Mesnagem de erro"
    /*throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    } */
}

/* Try é uma estrutura que faz a validação do código, podemos adicionar dentro do TRY, um bloco de código
 complexo que possívelmente pode gerar um erro, e podemos usar o CATCH para gerar um alerta de erro com alguma 
 informção, podendo ser uma mensagem ou o código do erro e etc. Pode adicionar o Finally com um alerta para 
 adicionar e frizar que o código foi finalizado! */
function imprimirNomeGritado (obj) {
    try{
        console.log(obj.name.toUpperCase() + "!!!")
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log("Final")
    }
};

const obj = {name: "Igor"};
imprimirNomeGritado(obj);