//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Closures
//https://www.w3schools.com/js/js_function_closures.asp

//Closure é o escopo criado quando uma função é declarada
//Esse escopo permite a função acessar e manipular variáveis externas a função

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())