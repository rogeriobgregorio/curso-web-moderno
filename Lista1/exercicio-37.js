/*
Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.
*/

function progressaoAritmetica(n, a1, r) {
    let progressao = 0
    let soma = 0
    for (let i = 0; i < n; i++) {
        progressao = a1 + r * i
        console.log(progressao);
        soma += progressao
    }
    console.log(`Soma: ${soma}`);
}

function progressaoGeometrica(n, a1, r) {
    let progressao = 0
    let soma = 0
    for (let i = 0; i < n; i++) {
        progressao = a1 * (r ** i)
        console.log(progressao);
        soma += progressao
    }
    console.log(`Soma: ${soma}`);
}

progressaoAritmetica(10, 10, 15)
console.log('__________________');
progressaoGeometrica(10, 5, 3)