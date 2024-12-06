const escola = 'cod3r';

console.log(escola.charAt(4));//significa que ele vai imprimir a letra que esta na quarta posição, começando do zero (0, 1, 2, 3, 4)
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3));//retorna o valor da tabela asc
console.log(escola.indexOf('3'));//me diz qual o indice do valor estipulado

console.log(escola.substring(1));//imprimi do indice 1 ate o final
console.log(escola.substring(0, 3));//imprimi do indice 0 ate 3 sem incluir o 3

console.log('Escola '.concat(escola).concat('!'));//concatenação
console.log(escola.replace(3, 'e'));//pega um valor e substitui por outro, veja que trocou o 3 pelo e

console.log('Ana,Maria,Pedro'.split(','));//gera um array