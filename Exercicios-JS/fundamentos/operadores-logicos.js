function compras(trabalho1, trabalhgo2) {
    const comprar_sorvete = trabalho1 || trabalhgo2
    const comprar_tv50 = trabalho1 && trabalhgo2
    // const comprar_tv32 = !!(trabalho1 ^ trabalhgo2) // bitwise xor
    const comprar_tv32 = trabalho1 != trabalhgo2
    const manter_saudavel = !comprar_sorvete // operador unário

    return {comprar_sorvete, comprar_tv50, comprar_tv32, manter_saudavel}
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));