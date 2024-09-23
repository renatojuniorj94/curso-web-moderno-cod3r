/* for (var i = 0; i < 10; i++) {
    console.log(i)
}

console.log('i =', i) //Por ser global será possivel imprimir 'var i' no console */

var funcs = []

for (var i = 0; i < 10; i++) { //Nesse caso, var não tem escopo de função
    funcs.push(function() {
        console.log(i)
    })
}

//Quando 'var i' saiu do bloco, ele ficou com valor '10'.
funcs[2] ()
funcs[8] ()