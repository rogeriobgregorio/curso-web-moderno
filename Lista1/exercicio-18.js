/*
Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’
*/
function escreverExtenso(numero) {
    
    switch (numero) {
        case 0:
            return 'Zero'
        case 1:
            return 'Um'
        case 2:
            return 'Dois'
        case 3:
            return 'Três'
        case 4:
            return 'Quatro'
        case 5:
            return 'Cinco'
        case 6:
            return 'Seis'
        case 7:
            return 'Sete'
        case 8:
            return 'Oito'
        case 9:
            return 'Nove'
        case 10:
            return 'Dez'
        default:
            return 'Numero fora do intervalo'
    }
}
console.log(escreverExtenso(0));
console.log(escreverExtenso(1));
console.log(escreverExtenso(2));
console.log(escreverExtenso(3));
console.log(escreverExtenso(4));
console.log(escreverExtenso(5));
console.log(escreverExtenso(6));
console.log(escreverExtenso(7));
console.log(escreverExtenso(8));
console.log(escreverExtenso(9));
console.log(escreverExtenso(10));
console.log(escreverExtenso(11));