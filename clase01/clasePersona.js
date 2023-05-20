
class Persona {
    constructor(nombre) {
        this.nombre = nombre
        this.age = 30
    }

    hablar() {
        console.log('My name is', this.nombre)
    }

    cumplirAge() {
        this.age++
    }
}

let javier = new Persona('Javier')
let sasha = new Persona('Sasha')

javier.age = 29

console.log(javier)
console.log(sasha)
javier.hablar()

sasha.cumplirAge()
sasha.cumplirAge()

console.log(sasha)
