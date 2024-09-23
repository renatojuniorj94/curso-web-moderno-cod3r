console.log(typeof Object) //function
//
console.log(typeof new Object()) //object

const Cliente = function() {}
console.log(typeof Cliente) //function
console.log(typeof new Cliente()) //object

class Produto {} //ES6 2015
console.log(typeof Produto) //function
console.log(typeof new Produto()) //object