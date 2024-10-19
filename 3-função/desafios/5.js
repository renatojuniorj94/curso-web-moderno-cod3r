function valorMonetario(valor) {
    const format = valor.toFixed(2).replace('.', ',')
    console.log('R$ ' + format)
}

valorMonetario(0.30000000000000004)

//Correto! :D 
//Outra maneira de fazer...

function formatarValorDecimal(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

formatarValorDecimal(0.1 + 0.2)