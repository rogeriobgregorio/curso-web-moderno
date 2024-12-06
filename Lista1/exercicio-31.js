/*
Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.
*/

function contarNegativos(vetor) {
     let numerosNegativos = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            numerosNegativos++
        }
    }
    return numerosNegativos
}

let vetor = [1, -5, 7, 14, -21, 39, -66, 123]
console.log(contarNegativos(vetor));