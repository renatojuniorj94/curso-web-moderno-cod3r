const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in num) {
    //if (x == 5) break
    if (x == 5) {
        break
    }
    console.log(`${x} = ${num[x]}`)
}

console.log()

for (y in num) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${num[y]}`)
}

//externo:
externo: for (a in num) { //Inserindo um rotulo(nesse caso nomeamos como externo)
    for (b in num) {
        if (a == 2 && b == 3) break externo
        console.log(`par = ${a}, ${b}`)
    }
}