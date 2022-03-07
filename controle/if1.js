// 1 - Forma de usar If passando o operador lógico.
// Nesse caso estamos fazendo a comparação da variável com o número setado.

// If = SE
function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log("Aprovado com " + nota)
    }
};

soBoaNoticia(8.1);
soBoaNoticia(6.1); // Não retornara nada, pois não está dentro da condição >= 7

// 2 - Forma de usar If
// Fazendo a validação por tipo de dado boolean!
// Sendo necessário apenas passar a variável.
// Passando diretamente o valor, o Js automaticamente faz a manipulação do tipo boolean
// Está convertendo o valor para boolean
function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log("É verdade... " + valor)
    }
};

seForVerdadeEuFalo(); // Não retornara nada pois tem status de undefined e é falso.
seForVerdadeEuFalo(undefined);// Não retornara nada pois tem status de undefined e é falso.
seForVerdadeEuFalo(NaN); // NaN também retorna false
seForVerdadeEuFalo(""); // String sem preenchimento e sem espaço retorna false
seForVerdadeEuFalo(0); // 0 é igual a False
seForVerdadeEuFalo(-1); // -1 é um número verdadeiro.
seForVerdadeEuFalo(" "); // Retorna true pois tem espaço armazenado
seForVerdadeEuFalo("?");
seForVerdadeEuFalo([]); // Contendo Array = True
seForVerdadeEuFalo([1, 2]) // Contendo dados dentro da Array = true
seForVerdadeEuFalo({}) // Objeto Vazio
