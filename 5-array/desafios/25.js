/* 
A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para 
identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array de 
strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.
Exemplos:
buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]) // retornará ["programação", "profissional"] 
buscarPalavrasSemelhantes("java", ["javascript", "java", "c++"]) // retornará ["javascript", "java"]
*/


function buscarPalavraSemelhante(palavra, array) {
    let resultado = [];
    let palavraMinusculo = palavra.toLowerCase()
    //let arrayMinusculo = array.toLowerCase()
    for (let i = 0; i < array.length; i++) {
        if (array[i].toLowerCase().includes(palavraMinusculo)){
            resultado.push(array[i])
        }
    }
    return resultado
}

console.log(buscarPalavraSemelhante("pro", ["programação", "mobile", "profissional"]))
console.log(buscarPalavraSemelhante("java", ["javascript", "java", "c++"]))
console.log(buscarPalavraSemelhante('AsI', ["Argentina", "Brasil", "Chile", "Uruguai"]))