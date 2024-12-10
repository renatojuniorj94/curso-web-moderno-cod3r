/* 
Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão deverá 
ser de duas casas decimais, arredondando se necessário.
📕Obs: a fórmula para calcular a área de um triângulo é (base x altura) / 2
Exemplos:
areaDoTriangulo(10, 15) // retornará "75,00" 
areaDoTriangulo(7, 9) // retornará "31,50" 
areaDoTriangulo(9.25, 13.1) // retornará "60.59"
*/

function areaDoTriangulo(n1, n2) {
    const calculo = (n1 / 2) * n2
    return calculo.toFixed(2).replace('.', ',')
}

console.log(areaDoTriangulo(10, 15))
console.log(areaDoTriangulo(7, 9))
console.log(areaDoTriangulo(9.25, 13.1))

//Com arrow function

const areaDoTriangulo2 = (n1, n2) => {
    const calculo = (n1 / 2) * n2
    return calculo.toFixed(2).replace('.', ',')
}

console.log(areaDoTriangulo2(10, 15))
console.log(areaDoTriangulo2(7, 9))
console.log(areaDoTriangulo2(9.25, 13.1))

//Correto! :D
//Outra maneira de fazer:

//Resolução:
function areaDoTriangulo(base, altura) { 
  const area = (base * altura) / 2 
 
  return area.toFixed(2) // irá arredondar para manter 2 casas decimais 
}