function soBoaNoticia(nota) {
    if(nota >= 7) {
        //console.log('Aprovado com ' + nota)
        console.log(`Aprovado com ${nota}`)
    }
}

soBoaNoticia(8)
soBoaNoticia(6.99) //Condição não atendida

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log(`É verdade... ${valor}`)
    }
}

seForVerdadeEuFalo() //false
seForVerdadeEuFalo(null) //false
seForVerdadeEuFalo(undefined) //false
seForVerdadeEuFalo(NaN) //false
seForVerdadeEuFalo('') //false
seForVerdadeEuFalo(0) //false
seForVerdadeEuFalo(-1) //true
seForVerdadeEuFalo(' ') //true
seForVerdadeEuFalo('?') //true
seForVerdadeEuFalo([]) //true
seForVerdadeEuFalo([1, 2]) //true
seForVerdadeEuFalo({}) //true