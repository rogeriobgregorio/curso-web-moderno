/*
Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
*/

function palavras(string1, string2) {
    let contido = true
    for (let i = 0; i < string1.length; i++) {
        let charString1 = string1.charAt(i).toLowerCase()
        for (let j = 0; j < string2.length; j++) {
            let charString2 = string2.charAt(j).toLowerCase()
            charString1 == charString2 ? contido = true : contido = false
        }
    }
    return !contido
}

console.log(palavras('Rogerio', 'Gregorio'));
console.log(palavras('abc', 'cba'));