// Comparando se o atributo This é igual ao elemento Global.
// Necessário prestar atenção nas alterações efetuadas envolvendo This pois aplica globalmente.
// This em uma ArrowFunction NÃO ALTERA. ele sempre será associado ao this que foi definido dentro da Arrow

let compararComThis = function (param) {
    console.log(this === param)
}

// chamando a função para comparar se o elemento global é restritamente igual ao This.
compararComThis(global)

const obj = {}
compararComThis = compararComThis.bind(obj);
compararComThis(global);
compararComThis(obj);

let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global);
// Exportando modulo exports para elemento This, não sofre alterações.
comparaComThisArrow(module.exports);

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)
