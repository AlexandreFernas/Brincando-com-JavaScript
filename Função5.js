

function incrementarJuros(valor, percentualJuros) {
    const ValorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + ValorDeAcrescimo;
}


console.log(incrementarJuros(100, 10))
console.log(incrementarJuros(100, 15))