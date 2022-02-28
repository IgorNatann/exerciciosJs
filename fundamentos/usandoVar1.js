// Existem dois tipos de declaração de variáveis! 
// A global, que pode ser acessada e modificada a qualquer momento.
// e a variável criada dentro de uma funciton que não pode ser alterada globalmente e nem acessada.

// Importante usar variáveis que não possam ser alteradas globalmente, principalmente em projetos compartilhados.
// Podendo dar muita dor de cabeça referente a sobreescrita da variável já declarada.
//
{
    {
        {
            {
                var sera = "Será??";
            }
        }
    }
}
// acessando e modificando a variável fora do escopo! #PERIGO 
console.log(sera);
sera = "alteração";
console.log(sera);


function teste() {
    var local = 123
    console.log(local);
}

// Tentando acessar local fora do escopo da function.
//console.log(local);