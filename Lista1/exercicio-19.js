/*
O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100    Cachorro Quente      R$ 3,00
200    Hambúrguer Simples   R$ 4,00
300    Cheeseburguer        R$ 5,50
400    Bauru                R$ 7,50
500    Refrigerante         R$ 3,50
600    Suco                 R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/

function cardapio(codigo, quantidade) {
    
    switch (codigo) {
        case 100:
            quantidade *= 3
            return quantidade.toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'})
        case 200:
            quantidade *= 4
            return quantidade.toLocaleString('pt-Br', { style: 'currency', currency: 'BRL' })
        case 300:
            quantidade *= 5.50
            return quantidade.toLocaleString('pt-Br', { style: 'currency', currency: 'BRL' })
        case 400:
            quantidade *= 7.50
            return quantidade.toLocaleString('pt-Br', { style: 'currency', currency: 'BRL' })
        case 500:
            quantidade *= 3.50
            return quantidade.toLocaleString('pt-Br', { style: 'currency', currency: 'BRL' })
        case 600:
            quantidade *= 2.80
            return quantidade.toLocaleString('pt-Br', { style: 'currency', currency: 'BRL' })
        default:
            return 'Produto não existente.'
    }
}

console.log(cardapio(100, 2)); // 6 reais
console.log(cardapio(200, 2)); // 8 reais
console.log(cardapio(300, 2)); // 11 reais
console.log(cardapio(400, 2)); // 15 reais
console.log(cardapio(500, 2)); // 7 reais
console.log(cardapio(600, 2)); // 5,60 reais
console.log(cardapio(700, 2));