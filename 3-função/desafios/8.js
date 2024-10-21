//Retornar quantas vezes o recorde foi batido
//Retornar a partida que ele fez a pior pontuação

let pontosString = '10 20 20 8 25 3 0 30 1'

function metricas(pontosString) {
    let pontos = pontosString.split(' ') // Removendo os espaços da string 'pontosString'
    let recordes = 0
    let piorJogo = 1
    let maiorPontuacao = pontos[0]
    let menorPontuacao = pontos[0]

    for (let c = 1; c < pontos.length; c++) {
        if (pontos[c] > pontos[c], c++) {
            recordes += 1
            maiorPontuacao = pontos[c]
            console.log(maiorPontuacao)
        }
    }
}

console.log(metricas(pontosString))