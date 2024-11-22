let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo, '\n')
// ! > Transforma um número em 'false'
// !! > Transforma um número em 'true'

console.log(!!false)
console.log(!false, '\n')

//Situações que podemos converter para 'true':
console.log('Verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true), '\n')

//Situações que podemos converter para 'false'
console.log('Falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Pra finalizar...')
console.log(!!('' || null || 0 || ' '))

let nome = ''

console.log(nome || 'Desconhecido')