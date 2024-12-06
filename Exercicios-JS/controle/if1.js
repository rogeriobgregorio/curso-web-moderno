function so_boa_noticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota);
    }
}

so_boa_noticia(8.1)
so_boa_noticia(6.1)

function se_for_verdade_eu_falo(valor) {
    if (valor) {
        console.log('É verdade... ' + valor);
    }
}

se_for_verdade_eu_falo()
se_for_verdade_eu_falo(null)
se_for_verdade_eu_falo(undefined)
se_for_verdade_eu_falo('')
se_for_verdade_eu_falo(0)
se_for_verdade_eu_falo(-1)
se_for_verdade_eu_falo(' ')
se_for_verdade_eu_falo('?')
se_for_verdade_eu_falo([])
se_for_verdade_eu_falo([1, 2])
se_for_verdade_eu_falo({})