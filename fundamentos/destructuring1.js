// Destructuring nada mais é que desfragmentar um objeto, para que torne acessível os atributos desejados contidos dentro do objeto a qualquer momento.
// Ele desestrutura um objeto, podemos usar também em um Array.
// O Operador destructuring é representado por " { } ".
// Temos que fazer essa desestruturação para pode usar os campos necessários futuramente,
// Buscando o objeto em um todo, ele trás todas as informações contidas, as vezes não sendo necessário.
// novo recurso do ES2015

const pessoa = {
    nome: "Igor",
    idade: 22,
    endereco: {
        logradouro: "Rua ABC",
        numero: 1000
    }
};

// Exemplo de aplicação do operador destructuring
// Setando os atributos que desejo desestrutura do objeto pessoa.
const { nome, idade } = pessoa; // Atributos que desejo desestruturar da constante Pessoa.
// Consultando atributos contidos na constante desestruturadas.
console.log(nome, idade);

// Atribuindo outro nome de constante ao atribudo setado.
// Podendo facilitar na compreensão ou na facilitade na busca.
const { nome: n, idade: i } = pessoa;
console.log(n, i);

// Quando o atributo está conteudo outros atribudos, podemos acessa-lós dessa forma!
// Primeiro setando o atributo principal e dentro da segunda chaves os atributos filhos!
const { endereco: { logradouro, numero, cep } } = pessoa; // Setando para buscar dentro de endereço os outros atributos desejados.
console.log(logradouro, numero, cep); // Setando atributo inesistente, retorna como não defido.

