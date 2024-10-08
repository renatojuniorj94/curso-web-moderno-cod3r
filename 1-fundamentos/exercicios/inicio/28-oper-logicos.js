function Compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 //'Ou' (Se o primeiro trabalho for 'true' (deu certo) não precisa analisar a segunda situação. Um ou outro trabalho precisa dar certo pra ele conseguir comprar o sorvete.)

    const comprarTv50 = trabalho1 && trabalho2 // 'and' (Se o primeiro for 'false' (deu errado) ele não precisa olhar para o segundo. As dois trabalho precisam dar certo para ele comprar a TV.)

    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete //operador unário
    
    return {
        comprarSorvete,
        comprarTv50,
        comprarTv32,
        manterSaudavel
    }
}

console.log(Compras(true, true))
console.log(Compras(true, false))
console.log(Compras(false, true))
console.log(Compras(false, false)) //Os dois trabalhos deram errado