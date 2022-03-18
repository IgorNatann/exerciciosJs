// IIFE -> Imedeately Invoked Function Expression 
// É uma function anonima alto invocada. resume-se em criar function que os atributos estiverem dentro dela, não terá acesso no escopo global!
// Assim deixando mais seguro o codígo para que as variáveis não sejam alteradas no escopo global.

// Engloba a function dentro de (), e retornando-a no final ()
(function() {
    console.log("Será executado na hora")
    console.log("Foge do escopo mais abrangente/global")
})()