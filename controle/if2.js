// Como o If está com chaves aberta, retornara o conteudo Final também!
// temos que estruturar por chaves para deixar frizado o que vai e o que não vai aparecer dentro do bloco
function teste1(num) {
    if (num > 7)
        console.log(num)

    console.log("Final")  // Está dentro da condição do If então também vai ser retornada.  
}

teste1(6);
teste2(8);

// Não utilizar ponto e virgula depois da definição do If!
// Como o ponto e virgula está definindo que está encerrando o código antes de validar a estrutura
function teste2 (num) {
    if(num > 7); { // Cuidado com o " ; ", não usar com as estruturas de controle, " ; " é considerado uma sentença de código. 
        console.log(num)
    }
}

teste2(6)
teste2(8)