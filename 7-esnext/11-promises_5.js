function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErro) {
            reject('Ocorreu um erro!')
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(v => `Valor: ${v}`)
    .then(v => consol.log(v))
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log('Fim!'))
//Depois de catch, podemos continuar com then, porém sem a continuidade de dados. 

/* function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log('Temp') //Forçando erro
            if (Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch (erro) {
            reject(erro)
        }
    })
}

funcionarOuNao('Testanto...', 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => consol.log(v),
        err => console.log(`Erro esp.: ${err}`)
    )
    .then(() => console.log('Quase fim!'))
    .catch(err => console.log(`Erro Geral: ${err}`))
    .then(() => console.log('Fim!')) */