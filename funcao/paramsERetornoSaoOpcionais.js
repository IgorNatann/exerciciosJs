function area (largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitdo: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2, 2));
console.log(area(2)); // Passando apenas um parametro, retorna como NaN, por que um dado está undefined
console.log(area());// Conteudo vazio, Nan
console.log(area(2, 3, 17, 22, 44)); // Vai ignorar todos os números a mais.
console.log(area(5,5)); // Passa do limite.