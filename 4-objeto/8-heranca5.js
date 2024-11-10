console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('Brasil'.reverse()) // lisarB

Array.prototype.first = function() {
    return this[0]
}

console.log(['Brasil', 'Flamengo', 'Real Madrid'].first()) // Brasil
console.log([1, 2, 3, 4, 5].first()) // 1

String.prototype.toString = function() { // Não refaça uma função já existente.
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())