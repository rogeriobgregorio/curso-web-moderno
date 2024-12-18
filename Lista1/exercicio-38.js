/*
Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.
*/

function numerosImpares(inicio = 0, fim = 100) {
    let impares = []
    let aux = 0
    if (inicio > fim) {
        aux = inicio
        inicio = fim
        fim = aux
    }
    for (let i = inicio; i <= fim; i++) {
        if (i % 2 != 0) {
            impares.push(i)
        }
    }
    return impares
}


numerosImpares(19, 3)