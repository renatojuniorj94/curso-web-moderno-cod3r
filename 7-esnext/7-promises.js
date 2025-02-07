function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Chegoooou')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))

function erroNoPedido(segundos, frase) {
    return new Promise(reject => {
        setTimeout(() => {
            reject(frase)
        }, segundos * 1000)
    })
}

erroNoPedido(3, 'Houve um problema com o seu pedido!')
    .catch(erro => console.log(erro)) //A ordem de catch e then não interferem no resultado.
    .then(frase => frase.concat('!!!'))
    .then(outraFrase => console.log(outraFrase))

//Then é um método usado para lidar com o resultado de uma Promise resolvida. Ele recebe uma função como argumento e executa essa função quando a Promise for resolvida com sucesso.
//Catch é um método usado para capturar erros em Promises. Ele é acionado quando a Promise é rejeitada (reject()) ou quando ocorre um erro dentro de um .then()