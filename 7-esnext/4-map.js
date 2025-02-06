const tecnologias = new Map()
tecnologias.set('react', { framework: false})
tecnologias.set('angular', { framework: true})

console.log(tecnologias)
console.log(tecnologias.react) //undefined
console.log(tecnologias.get('react')) //Maneira de correta de acessar o valor
//Ou
console.log(tecnologias.get('react').framework) //false

const chavesVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
})
/* 
[Function (anonymous)] Função
{} Objeto
123 Número
*/

console.log(chavesVariadas.has(123)) //true
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123)) //false
console.log(chavesVariadas.size) //2

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b') //A estrutura não aceita repetição de chaves
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)