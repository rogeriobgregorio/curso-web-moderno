/* 
Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais.Isósceles: Dois lados iguais.Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve - se abstrair as condições matemáticas de existência de um
triângulo).
*/

function triangulo(lado1, lado2, lado3) {
        if (lado1 + lado2 < lado3 || lado1 + lado3 < lado2 || lado2 + lado3 < lado1) {
            console.log('Valores incorretos');
        }else if (lado1 == lado2 && lado1 == lado3 && lado2 == lado3) {
            console.log('O triangulo é equilatero');
        }else if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3) {
            console.log('O triangulo é escaleno');
        } else {
            console.log('O triangulo é isosceles');
        }  
}

// valores de teste
 triangulo(20, 10, 5) // valores incorretos
 triangulo(10, 10, 10) // Equilátero
 triangulo(10, 10, 20) // Isosceles
 triangulo(10, 20, 30) // Escalena
