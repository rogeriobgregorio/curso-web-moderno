/*
 Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.
*/

function verificar(numero) {
    return (numero % 3 == 0 ? 'true' : 'false');
}

console.log(verificar(3));
console.log(verificar(10));
console.log(verificar(159));