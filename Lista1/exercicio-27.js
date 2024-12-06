/*
Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/

function crescimento(altura1, taxaCrescimento1, altura2, taxaCrescimento2) {
    let anos = 0
    if (altura1 > altura2 && taxaCrescimento2 > taxaCrescimento1) {
        while (altura1 > altura2) {
            altura1 += taxaCrescimento1
            altura2 += taxaCrescimento2
            anos++
            return `A segunda criança é menor e irá ultrapassará em ${anos}`
        }

    } else if (altura2 > altura1 && taxaCrescimento1 > taxaCrescimento2) {
        while (altura2 > altura1) {
            altura1 += taxaCrescimento1
            altura2 += taxaCrescimento2
            anos++
            return `A primeira criança é menor e irá ultrapassará em ${anos}`
        }
        
    }else if (altura1 == altura2 && taxaCrescimento1 == taxaCrescimento2) {
        return `As crianças tem alturas e crescimentos iguais`

    } else if (altura1 == altura2 && taxaCrescimento1 > taxaCrescimento2) {
        return `As crianças tem alturas iguais, porém a primeira irá ultrapassar a segunda em 1 ano`

    } else if (altura1 == altura2 && taxaCrescimento1 < taxaCrescimento2) {
        return `As crianças tem alturas iguais, porém a segunda irá ultrapassar a primeira em 1 ano`

    } else if (altura1 > altura2 && taxaCrescimento1 == taxaCrescimento2 || taxaCrescimento1 > taxaCrescimento2) {
        return `A primeira criança é maior e não será ultrapassada`

    } else if (altura1 < altura2 && taxaCrescimento1 == taxaCrescimento2 || taxaCrescimento1 < taxaCrescimento2) {
        return `A segunda criança é maior e não será ultrapassada`

    }
}

console.log(crescimento(150, 10, 100, 20));
console.log(crescimento(100, 20, 150, 10));
console.log(crescimento(150, 5, 150, 5));
console.log(crescimento(150, 10, 150, 5));
console.log(crescimento(150, 5, 150, 10));
console.log(crescimento(160, 5, 150, 5));
console.log(crescimento(150, 5, 160, 5));
