console.log('01)', '1' == 1) //true (== igual)
console.log('02)', '1' === 1) //false (=== estritamente igual)
console.log('03)', '3' != 3) //false (!= diferente)
console.log('04)', '3' !== 3) //true (!== estritamente diferente)
console.log('05)', 3 < 2) //false (< menor que)
console.log('06)', 3 > 2) //true (> maior que)
console.log('07)', 3 <= 2) //false (menor ou igual)
console.log('08)', 3 >= 2) //true (maior ou igual)

const d1 = new Date(0) // '0' = 1970-01-01T00:00:00.000Z
const d2 = new Date(0)
console.log('09)', d1 == d2) //false (Por estar alocado em espaços diferentes na memoria é 'false')
console.log('10)', d1 === d2) //false (Por estar alocado em espaços diferentes na memoria é 'false')
console.log('11)', d1.getTime() === d2.getTime()) //true (Por estar comparando 'Number' ele vai retornar o valor em milisegundos, por isso é 'true')
console.log('12)', undefined == null) //true
console.log('13)', undefined === null) //false