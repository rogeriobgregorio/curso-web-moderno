/*
Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
*/

let vetorNumeros = [1, 2, 3, 4, 5]

function multiplicarVetor(vetorNumeros, multiplicador) {
    let numerosMultiplicados = []
    vetorNumeros.forEach(elemento => {
        numerosMultiplicados.push(elemento * multiplicador)
    });
    return numerosMultiplicados
}


console.log(multiplicarVetor(vetorNumeros, 3));
