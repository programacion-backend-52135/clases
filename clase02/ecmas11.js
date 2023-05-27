const varTest = 0
const varAsignable = varTest || "Sin Valor"
console.log(varAsignable)

const varAsignable2 = varTest ?? "Sin Valor"
console.log(varAsignable2)

// Private Attributes
class Persona {

    #fullname
    
    constructor(name, lastname) {
        this.name = name
        this.lastname = lastname
        this.#fullname = `${name} ${lastname}`
    }

    get = () => {
        return this.#fullname
    }

}

const nicolas = new Persona('nicolas', 'ayala')
nicolas.getFullname()