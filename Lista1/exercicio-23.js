/*
Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

function calcularMedia(nota1, nota2, nota3, codigoAluno) {
    let mediaPonderada = (((4 * nota1) + (3 * nota2) + (3 * nota3)) / (4 + 3 + 3))
    let situacao = mediaPonderada >= 5 ? 'Aprovado' : 'Reprovado'

    let aluno = {
        codigoAluno: codigoAluno,
        nota1: nota1,
        nota2: nota2,
        nota3: nota3,
        mediaPonderada: mediaPonderada,
        situacao: situacao
    }
    return aluno
}

console.log(calcularMedia(5, 5, 5, 104));