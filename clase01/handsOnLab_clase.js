class Counter {

    constructor(responsible) {
        this.responsible = responsible
        this.count_local = 0
    }

    static count_global = 0 // Variable estatica.

    getResponsible = () => { return this.responsible }
    getCountLocal = () => { return this.count_local }
    get = () => {
        console.log(`${this.responsible}: ${this.count_local}`)
        console.log(`Variable Global: ${Counter.count_global}`)
    }

    count = () => {
        this.count_local++
        Counter.count_global++
    }
}

const dario = new Counter('dario')
const santiagoTutor = new Counter('santiagoTutor')
const sasha = new Counter('sasha')

dario.count()
dario.count()
sasha.count()

dario.get()
sasha.get()
santiagoTutor.get()

console.log("Variable global de Santiago: ", Counter.count_global)

