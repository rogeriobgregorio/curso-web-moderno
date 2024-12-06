/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação.A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos */

function jurosSimples(capitalInicial, taxaDeJuros, tempoAplicacao) {

    valorJurosSimples = capitalInicial * (taxaDeJuros / 100) * tempoAplicacao
    valorJurosSimples = valorJurosSimples.toLocaleString('pt-Br', { style: 'currency', currency: 'BRL' })

    return valorJurosSimples
}

function jurosComposto(capital, juros, tempo) {
    juros = juros/100
    valorJurosComposto = capital * (1 + juros) ** tempo
    valorJurosComposto = valorJurosComposto.toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'})
    return valorJurosComposto
}

jurosSimples(1000, 10, 3)
console.log(`O valor do rendimento será de ${valorJurosSimples}`);

jurosComposto(1400, 7, 2)
console.log(`O valor do rendimento será de ${valorJurosComposto}`);