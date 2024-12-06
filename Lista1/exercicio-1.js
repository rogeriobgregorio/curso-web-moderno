/*
Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.
*/

function operacoes(pValor, sValor) {
    soma = console.log(`${pValor} + ${sValor} = ${pValor + sValor}`);
    sub = console.log(`${pValor} - ${sValor} = ${pValor - sValor}`);
    mult = console.log(`${pValor} * ${sValor} = ${pValor * sValor}`);
    div = console.log(`${pValor} / ${sValor} = ${pValor / sValor}`);
}

operacoes(7, 3)