//Arrow function (Arrow functions são funções anônimas)
//Quando temos mais de 1 parâmetro em AF, obrigatoriamente precisamos colocar dentro de parênteses
const soma = (a, b) => a + b
console.log(soma(2, 3))

//Se colocarmos um corpo na função, obrigatoriamente temos que especificar o 'return'
const soma2 = (a, b) => {
    return a + b
}
console.log(soma2(5, 4))

//Apenas 1 parâmetro
const par = num => num % 2 === 0
console.log(par(4)) //true
console.log(par(3)) //false

//Arrow function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1() //true
lexico2() //true

//Parâmetros default
function log(texto = 'Node') {
    console.log(texto)
}

log() //Node
log(undefined) //Node
log(null) //Null
log('Agora sou PHP') //Agora sou PHP

//Operador rest ou spread
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5)) //14