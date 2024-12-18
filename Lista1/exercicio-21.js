/*
Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130.
*/

function planoDeSaude(idade) {
    let valor = 100

    if (idade < 10) {
        valor += 80
        return valor.toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'})
    } else if (idade <= 30) {
        valor += 50
        return valor.toLocaleString('pt-Br', { style: 'currency', currency: 'BRL' })
    } else if (idade <= 60) {
        valor += 95
        return valor.toLocaleString('pt-Br', { style: 'currency', currency: 'BRL' })
    } else{
        valor += 130
        return valor.toLocaleString('pt-Br', { style: 'currency', currency: 'BRL' })
    }
}

console.log(planoDeSaude(9)); // 180
console.log(planoDeSaude(15)); // 150
console.log(planoDeSaude(45)); // 195
console.log(planoDeSaude(75)); // 230