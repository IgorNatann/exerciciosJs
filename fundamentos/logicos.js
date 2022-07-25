/* Exmplos de operadores lógicos aplicados

TABELA VERDADE

V E V -> V
V E F -> F
F E ? -> F

V OU ? -> V
F OU V -> V
F OU F -> F

V XOR V -> F
V XOR F -> V
F XOR V -> V
F XOR F -> F

!V -> F
!F -> V

*/

function compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2; // || = OU , será necessário apenas uma afirmação retornar TRUE e executar alguma ação.
    const comprarTv50 = trabalho1 && trabalho2; // && = E/I , É necessário as duas informações serem TRUE para retornar TRUE, e executar certa ação
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // exemplo bitwise xor
    const comprarTv32 = trabalho1 != trabalho2; // != = diferente de. Está conferindo se o trabalho 1 ou o 2 está com status de TRUE, algum estando, será retornado true e executara certa ação.
    const manterSaudavel = !comprarSorvete // operador unário, Confere se comprarSorvete é TRUE ou FALSE, se for TRUE, não acionara a const manterSaudavel

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel};
}

console.log(compras(true, true));
console.log(compras (true, false));
console.log(compras (false, true));
console.log(compras (false, false));

