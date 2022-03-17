// Exemplo de callback no Browser

// Monitorando e retornando um alert toda vez que um clique é feito no Body do Browser
document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log("O evento ocorreu!")
}