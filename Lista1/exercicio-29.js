/*
Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.
*/

function intervalo(vetor) {
    contadorDentro = 0
    contadorFora = 0
    for (let i = 0; i < vetor.length; i++) {
        vetor[i] >= 10 && vetor[i] <= 20 ? contadorDentro++ : contadorFora++
    }
    console.log(`No intervalo entre 10 e 20 há ${contadorDentro} numeros e fora há ${contadorFora} numeros`);
}

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
intervalo(vetor)