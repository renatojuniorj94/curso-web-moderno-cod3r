const arrowFunction = () => {
    console.log('Não aponta para o global >', this == global)
    console.log('Aponta para o exports >', this == exports)
    console.log('Aponta para o module.exports (que é basicamente o mesmo que exports) >', this == module.exports)
    console.log('O this nesta função NÃO É GLOBAL >', this === global)
    console.log('O this nesta função É O MODULE.EXPORTS >', this === module.exports)
}

arrowFunction()