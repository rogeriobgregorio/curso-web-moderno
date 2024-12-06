/*
Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.
*/

function selecionarFruta(fruta) {
        let filtro = 0
        if (fruta == 'maçã') {
            filtro = 1
        } else if (fruta == 'kiwi') {
            filtro = 2
        }else if (fruta == 'melancia') {
            filtro = 3
        }
    
    switch (filtro) {
        case 1:
            console.log('Não vendemos esta fruta aqui');
            break;
        case 2:
            console.log('Estamos com escassez de kiwis');
            break;
        case 3:
            console.log('Aqui está, são 3 reais o quilo');
            break;
        default:
            console.log('Fruta não cadastrada');
            break;
    }
}

selecionarFruta('maçã')
selecionarFruta('kiwi')
selecionarFruta('melancia')