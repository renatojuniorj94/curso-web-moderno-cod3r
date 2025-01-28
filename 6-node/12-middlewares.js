//middlewares pattern (chain of responsability)
const passo1 = (contexto, next) => {
    contexto.valor1 = 'mid1'
    next()
}

const passo2 = (contexto, next) => {
    contexto.valor2 = 'mid2'
    next()
}

const passo3 = contexto => contexto.valor3 = 'mid3'

const exec = (contexto, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length && middlewares[indice](contexto, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3) //Se chamar o passo3 primeiro, ele encerra pois não chama a função next
console.log(ctx)