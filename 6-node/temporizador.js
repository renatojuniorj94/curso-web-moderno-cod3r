//Outros temporizadores: setTimeOut, setInterval

const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * * * * *', function() { //'*/5 * * * * *' é uma expressão cron.
    console.log('Executando tarefa 1', new Date().getSeconds())
})

setTimeout(function() {
    tarefa1.cancel()
    console.log('Cancelando tarefa 1!')
}, 10000)

//setImmediate
//setInterval

//Objeto dentro do node/schedule 'RecurrenceRule()'
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(0, 6)]
regra.hour = 5
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando tarefa 2!', new Date().getSeconds())
})

/* Padrão cron
* * * * * *
│ │ │ │ │ │
│ │ │ │ │ └── Dia da semana (0 - 6) (Domingo = 0)
│ │ │ │ └──── Mês (1 - 12)
│ │ │ └────── Dia do mês (1 - 31)
│ │ └─────── Hora (0 - 23)
│ └──────── Minuto (0 - 59)
└───────── Segundo (0 - 59)
*/