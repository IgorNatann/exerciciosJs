// Contexto Lexico é a forma de precedencia de retorno de uma function.
// Se atribuirmos uma constant dentro de uma function, ela esta disponível localmente dentro desse escopo da function
// Para tornar uma function Global, devemos declarar fora do escopo.

const valor = "Global"

// Nesse caso, a function retornara o atributor contido global, pois está declarado fora do escopo.
function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = "Local"
    minhaFuncao()
} 

// Chamando a função de fora do escopo, retornara a global
exec()