Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++)
        callback(this[i], i, this) //Esses são os elementos de uma função callback
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice, /* array */) {
    console.log(`${indice + 1}) ${nome}`)
    /* console.log(array) */
})