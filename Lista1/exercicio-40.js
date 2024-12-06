/*
Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A
*/

let notas = [0.0, 7.5, 1.2, 8.6, 3.4, 2.1, 4.4, 5.3, 9.9, 10, 11]

function conceitosNotas(notas) {
    let conceitos = []
    notas.forEach(element => {
        if (element <= 4.9) {
            conceitos.push('D')
        } else if (element > 5.0 && element <= 6.9) {
            conceitos.push('C')
        } else if (element >= 7.0 && element <= 8.9) {
            conceitos.push('B')
        } else if (element >= 9.0 && element <= 10) {
            conceitos.push('A')
        } else {
            conceitos.push('Nota inválida')
        }
    });
    return conceitos
}
console.log(conceitosNotas(notas));