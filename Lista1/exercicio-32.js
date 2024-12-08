/*
 Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
 */

 function calcularMedia(vetor) {
    let mediaAritmetica = 0
     for (let i = 0; i < vetor.length; i++) {
         mediaAritmetica += vetor[i]
     }
     mediaAritmetica = mediaAritmetica/vetor.length
     return mediaAritmetica
 }
 const vetor = [34, 98, 104, 12, 95, 9, 15, 77]
 console.log(calcularMedia(vetor));