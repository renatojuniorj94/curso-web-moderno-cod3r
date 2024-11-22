/* 
Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. Deverá diferenciar 
números de strings.
Exemplos:
maiorOuIgual(0, 0) // retornará true 
maiorOuIgual(0, "0") // retornará false 
maiorOuIgual(5, 1) // retornará true
*/

function maiorOuIgual(n1, n2) {
    if (n1 >= n2) {
        return true
    } else {
        return false
    }
}

console.log(maiorOuIgual(1, 2))
console.log(maiorOuIgual(2, 1))
console.log(maiorOuIgual(1, '1'))

const maiorOuMenor = (n1, n2) => n1 >= n2 ? true : false

console.log(maiorOuMenor(1, 2))
console.log(maiorOuMenor(2, 1))
console.log(maiorOuMenor(2, '2'))

//Correto! :D
//Outra maneira de fazer...

function maiorOuIgual(primeiro, segundo) {
    if (typeof primeiro != typeof segundo) return false

    return primeiro >= segundo
}