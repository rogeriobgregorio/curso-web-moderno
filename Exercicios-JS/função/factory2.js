// function criarProduto(a, b, c) {
//     return produto = {
//         nome: a,
//         preco: b,
//         desconto: c
//     }
// }

// console.log(factory('cafe', 1.99, 22+'%'));

function criarProduto(nome, preco, desconto = 0.1) {
    return {
        nome,
        preco,
        desconto
    }
}

console.log(criarProduto('Notebook', 2199.49));
console.log(criarProduto('iPad', 1199.49));