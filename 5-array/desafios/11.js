/* 
Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array:

Exemplos:
receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"] 
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16]
*/


let teste = [1, 2, 3, 4, 5]
function primeiroEUltimoElemento(array = []) {
    return console.log(array[0], array.at(-1))
}

primeiroEUltimoElemento(teste)
primeiroEUltimoElemento([7,14,"olá"])
primeiroEUltimoElemento([-100, "aplicativo", 16])