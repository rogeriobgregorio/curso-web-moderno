/*
Faça um algoritmo que calcule o fatorial de um número.
*/

function calcularFatorial(numero) {
    fat = 1
    while (numero > 0) {
        fat = fat * numero
        numero--
    }
    return console.log(fat);
}

calcularFatorial(5)

function calcfat(num) {
    f = 1
    for (let i = num; i > 0; i--){
        f = f * num
        num--
    }
    return console.log(fat);
}

calcfat(5)