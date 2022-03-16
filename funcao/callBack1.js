// CallBack nada mais é do que criar e passar uma função e chamar de  volta para executar alguma ação.
// Podemos criar CallBacks para validações, exemplo, rodar uma API para verificar dados, se encotnrar trás Status Sucess caso não encontre retorna Error

const fabricantes = ["Mercedez", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir);
fabricantes.forEach(fabricante => console.log(fabricante))