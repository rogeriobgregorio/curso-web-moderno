/*
Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/

function caixaEletronico(valor) {

    let saque = []
    
    let nota100 = 0
    while (valor >= 100) {
        nota100++
        valor -= 100
    }
    saque.push(`${nota100} nota(s) de R$ 100,00`)

    let nota50 = 0
    while (valor >= 50) {
        nota50++
        valor -= 50
    }
    saque.push(`${nota50} nota(s) de R$ 50,00`)

    let nota10 = 0
    while (valor >= 10) {
        nota10++
        valor -= 10
    }
    saque.push(`${nota10} nota(s) de R$ 10,00`)

    let nota5 = 0
    while (valor >= 5) {
        nota5++
        valor -= 5
    }
    saque.push(`${nota5} nota(s) de R$ 5,00`)

    let nota1 = 0
    while (valor >= 1) {
        nota1++
        valor -= 1
    }
    saque.push(`${nota1} nota(s) de R$ 1,00`)

     return saque
}

console.log(caixaEletronico(1000000));

