const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__) //[Object: null prototype] {}
console.log(ferrari.__proto__ === Object.prototype) //true
console.log(volvo.__proto__ === Object.prototype) //true
console.log(Object.prototype.__proto__) //null
console.log(Object.prototype.__proto__ === null) //true

function meuObjeto() {}
console.log(typeof Object, typeof meuObjeto) //function function
console.log(Object.prototype, meuObjeto.prototype) //[Object: null prototype] {} {}