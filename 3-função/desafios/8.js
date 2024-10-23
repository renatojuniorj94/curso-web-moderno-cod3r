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
        if (parseInt(pontos[c]) > parseInt(maiorPontuacao)) {
            maiorPontuacao = pontos[c]
            recordes++
        } else if (parseInt(pontos[c]) < parseInt(menorPontuacao)) {
            menorPontuacao = pontos[c]
            piorJogo = c + 1
        }
    }
    return console.log(`O atleta quebrou o recorde ${recordes} vezes, e sua pior partida foi a de número ${piorJogo}.`), [recordes, piorJogo]
}

console.log(metricas(pontosString))

//Correto! :D
//Outra maneira de fazer... (Feita no curso)

let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"
console.log(stringPontuacoes)
 
 
function avaliaPontuacoes (stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ")
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if(parseInt(pontuacoes[i]) > parseInt(maiorPontuacao)) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++
        }else if (parseInt(pontuacoes[i]) < parseInt(menorPontuacao)) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1;
        }
    }
    return [qtdQuebraDeRecords, piorJogo]
}
 
console.log(avaliaPontuacoes(stringPontuacoes))