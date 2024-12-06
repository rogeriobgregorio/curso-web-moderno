/*
Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

function diasDaSemana(dia) {
    let filtro = 0

    if (dia <= 0 || dia > 31) {
        filtro = 'inválido'
    }

    else if (dia > 1 && dia < 7 || 
             dia > 8 && dia < 14 || 
             dia > 15 && dia < 21 ||
             dia > 22 && dia < 28 ||
             dia == 30 || dia == 31) {
        filtro = 1
        
    } else {
        filtro = 2
    }

    switch (filtro) {
        case 1:
            console.log('Dia útil');
            break;
        
        case 2:
            console.log('Fim de semana');
        break;
    
        default:
            console.log('Valor inválido');
            break;
    }
}

diasDaSemana(1)
diasDaSemana(10)
diasDaSemana(14)
diasDaSemana(18)
diasDaSemana(41)