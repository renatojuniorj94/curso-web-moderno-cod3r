/* 02)​ Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:  
Equilátero: Os três lados são iguais. Isósceles:  Dois lados iguais. Escaleno: Todos os lados são diferentes.  
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto 
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um 
triângulo). */

function Triangulo(valor1, valor2, valor3) {
    if (valor1 === valor2 && valor1 === valor3 && valor2 === valor3) {
        console.log('Esse é um triângulo equilátero.')
    }

    if (valor1 === valor2 && valor1 != valor3 || valor1 === valor3 && valor1 != valor2 || valor2 === valor3 && valor2 != valor1) {
        console.log('Esse é um triângulo isósceles')
    }

    if (valor1 != valor2 && valor1 != valor3 && valor2 != valor3) {
        console.log('Esse é um triângulo escaleno')
    }
}

Triangulo(2, 2, 2)
Triangulo(2, 3, 2)
Triangulo(2, 3, 4)

//Correto! :D
//Outra maneira de fazer...

function classificaTriangulo (lado1, lado2, lado3) {
    if(lado1 == lado2 && lado2 == lado3){
        return 'Equilátero'
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'Isósceles'        
    }else { 
        return 'Escaleno'
    }
}

console.log(classificaTriangulo(2, 2, 2));
console.log(classificaTriangulo(2, 3, 3));
console.log(classificaTriangulo(2, 3, 4));