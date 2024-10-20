function bhaskara (ax2, bx, c) {
    let resultados = []
    let delta = (bx ** 2) - (4 * ax2 * c) // 6 - 8 = 2
    if(delta < 0){
        return "Delta é negativo"
    } 
    let x1 = (-bx + Math.sqrt(delta))/(2*ax2) // (-3 + 1.41421356237) / (2 * 1) = -0.79289321881
    let x2 = (-bx - Math.sqrt(delta))/(2*ax2) // (-3 + 1.41421356237) / (2 * 1) = -0.79289321881
    resultados.push(x1)
    resultados.push(x2)
    return resultados   
}

console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))