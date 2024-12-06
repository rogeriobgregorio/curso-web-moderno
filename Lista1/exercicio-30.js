/* Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
*/

function maiorEmenor(vetor) {
    console.log([Math.min.apply(Math, vetor), Math.max.apply(Math, vetor)]);
}

let vetor = [4, 78, 8, 7, 9, 84, 65, 87, 321, 47, 37, 72]
maiorEmenor(vetor)

function maiorMenor(vetor2) {
    let maior = 0
    let menor = 0
    for (let i = 0; i < vetor2.length; i++) {
        if (maior == 0 && menor == 0) {
            maior = vetor2[i]
            menor = vetor2[i]
        } else if (vetor2[i] > maior) {
            maior = vetor2[i]
        }else if (vetor2[i] < menor){
            menor = vetor2[i]
        }
    }
    return [menor, maior]
}
let vetor2 = [4, 78, 8, 7, 9, 84, 65, 87, 321, 47, 37, 72]
console.log(maiorMenor(vetor2));