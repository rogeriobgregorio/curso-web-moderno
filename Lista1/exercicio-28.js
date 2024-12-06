/*
 Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/

function leitor(numerosInteiros) {
    
    let pares = 0
    let impares = 0
    
    for (let i = 0; i < numerosInteiros.length; i++) {
        numerosInteiros[i] % 2 == 0 ? pares++ : impares++
    }
    console.log(`No vetor há ${pares} pares e ${impares} impares.`);
}

let numerosInteiros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
leitor(numerosInteiros)