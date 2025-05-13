function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function barreira(reversa = false) {
    this.elemento = novoElemento('div', 'barreira')

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px`
}

/* const b = new barreira(true)
b.setAltura(200)
document.querySelector('[wm-flappy]').appendChild(b.elemento) */

function parDeBarreiras(altura, abertura, x) {
    this.elemento = novoElemento('div', 'par-de-barreiras')

    this.superior = new barreira(true)
    this.inferior = new barreira(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = x => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(x)
}

/* const b = new parDeBarreiras(700, 200, 800)
document.querySelector('[wm-flappy]').appendChild(b.elemento) */

function BarreirasObj(altura, largura, abertura, espaco, notificarPonto) {
    this.pares = [
        new parDeBarreiras(altura, abertura, largura),
        new parDeBarreiras(altura, abertura, largura + espaco),
        new parDeBarreiras(altura, abertura, largura + espaco * 2),
        new parDeBarreiras(altura, abertura, largura + espaco * 3)
    ]

    this.pares.forEach(par => par.pontuado = false)

    const deslocamento = 3
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento)

            //Quando o elemento sair da área do jogo
            if (par.getX() < -par.getLargura()) {
                par.setX(par.getX() + espaco * this.pares.length)
                par.sortearAbertura()
                par.pontuado = false
            }

            /* const meio = largura / 2
            const cruzouOMeio = par.getX() + deslocamento >= meio && par.getX() > meio
            if(cruzouOMeio) notificarPonto() */
        })
    }
}

function passarinho(alturaJogo) {
    let voando = false

    this.elemento = novoElemento('img', 'passaro')
    this.elemento.src = 'imgs/passaro.png'

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `${y}px`

    window.onkeydown = e => voando = true
    window.onkeyup = e => voando = false

    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -5)
        const alturaMaxima = alturaJogo - this.elemento.clientHeight

        if (novoY <= 0) {
            this.setY(0)
        } else if (novoY >= alturaMaxima) {
            this.setY(alturaMaxima)
        } else {
            this.setY(novoY)
        }
    }

    this.setY(alturaJogo / 2)
}



function Progresso() {
    this.elemento = novoElemento('span', 'progresso')
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos
    }
    this.atualizarPontos(0)
}

//const parede = new BarreirasObj(700, 1200, 200, 400)
/* const parede = new BarreirasObj(700, 1200, 200, 400, () => {})

const passaro = new passarinho(700)
const areaDoJogo = document.querySelector('[wm-flappy]')
areaDoJogo.appendChild(passaro.elemento)
areaDoJogo.appendChild(new Progresso().elemento)
parede.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
setInterval(() => {
    parede.animar()
    passaro.animar()
}, 20) */

function estaoSobrepostos(elementoA, elementoB) {
    const a = elementoA.getBoundingClientRect()
    const b = elementoB.getBoundingClientRect()

    const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left
    const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top
    return horizontal && vertical
}

function colidiu(passaro, barreiras) {
    let colidiu = false
    barreiras.pares.forEach(parDeBarreiras => {
        if (!colidiu) {
            const superior = parDeBarreiras.superior.elemento
            const inferior = parDeBarreiras.inferior.elemento
            colidiu = estaoSobrepostos(passaro.elemento, superior) || estaoSobrepostos(passaro.elemento, inferior)
        }
    })
    return colidiu
}

function FlappyBird() {
    let pontos = 0
    const areaDoJogo = document.querySelector('[wm-flappy')
    const altura = areaDoJogo.clientHeight
    const largura = areaDoJogo.clientWidth

    const progresso = new Progresso()
    const barreiras = new BarreirasObj(altura, largura, 200, 400, () => progresso.atualizarPontos(++pontos))
    const passaro = new passarinho(altura)

    areaDoJogo.appendChild(progresso.elemento)
    areaDoJogo.appendChild(passaro.elemento)
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

    this.start = () => {
        const temporizador = setInterval(() => {
            barreiras.animar()
            passaro.animar()

            if (colidiu(passaro, barreiras)) {
                clearInterval(temporizador)
                botaoReiniciar.style.display = 'block' // mostra o botão
            }

            if (colidiu(passaro, barreiras)) {
                clearInterval(temporizador)
            }

            // Nova verificação: se o passaro passou pelo centro de uma barreira sem colidir
            barreiras.pares.forEach(par => {
                const barreiraX = par.getX() + par.getLargura()
                const passaroMeio = passaro.elemento.getBoundingClientRect().left + passaro.elemento.clientWidth / 2
                const barreiraMeio = par.elemento.getBoundingClientRect().left + par.elemento.clientWidth / 2

                if (!par.pontuado && passaroMeio > barreiraMeio) {
                    par.pontuado = true
                    progresso.atualizarPontos(++pontos)
                }
            })
        }, 20)
    }

}


//Implementando botão restart
new FlappyBird().start()

const botaoReiniciar = document.createElement('button')
botaoReiniciar.id = 'btn-reiniciar'
botaoReiniciar.innerText = 'Reiniciar'
botaoReiniciar.style.display = 'none'
botaoReiniciar.style.position = 'absolute'
botaoReiniciar.style.top = '50%'
botaoReiniciar.style.left = '50%'
botaoReiniciar.style.transform = 'translate(-50%, -50%)'
botaoReiniciar.style.padding = '10px 20px'
botaoReiniciar.style.fontSize = '20px'
document.querySelector('[wm-flappy]').appendChild(botaoReiniciar)



botaoReiniciar.onclick = () => {
    location.reload() // recarrega a página, reiniciando tudo
}