/* 
Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se o 
parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha "entre" 
como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro inclusivo não 
seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se numero 
é igual a minimo ou a maximo.

Exemplos:
estaEntre(10, 100, 50) // retornará true 
estaEntre(16, 100, 160) // retornará false 
estaEntre(3, 150, 3) // retornará false 
estaEntre(3, 150, 3, true) // retornará true
*/

function estaEntre(min, max, num, inclusivo = false) {
    if(inclusivo === true && num >= min && num <= max) {
        return true
    }else if (inclusivo === false && num > min && num < max) {
        return true
    } else {
        return false
    }
}

console.log(estaEntre(10, 100, 50)) // retornará true 
console.log(estaEntre(16, 100, 160)) // retornará false 
console.log(estaEntre(3, 150, 3)) // retornará false 
console.log(estaEntre(3, 150, 3, true)) // retornará true

//Correto! :D
//Outra maneira de fazer:

//Resolução 1:
function estaEntre(minimo, maximo, numero, inclusivo = false) { 
  if(inclusivo) return numero >= minimo && numero <= maximo 
 
  return numero > minimo && numero < maximo 
}

//Resolução 2:
function estaEntre(minimo, maximo, numero, inclusivo = false) { 
  return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo 
}

console.log(estaEntre(1, 50, 100, true))
console.log(estaEntre(10, 100, 50)) // retornará true 
console.log(estaEntre(16, 100, 160)) // retornará false 
console.log(estaEntre(3, 150, 3)) // retornará false 
console.log(estaEntre(3, 150, 3, true)) // retornará true