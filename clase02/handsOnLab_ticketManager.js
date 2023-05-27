class TicketManager {

    #precioBaseDeGanancia
    constructor() {
        this.events = []
        // # atributos privados
        this.#precioBaseDeGanancia = 0.15
    }

    getEvents = () => { return this.events }

    getNextID = () => {
        const count = this.events.length
        // [0, 1, 2, 3, 4, 5]
        // Count = 6

        if (count > 0) {

            // Ultimo indice es el 5
            return this.events[count - 1].id + 1
        } else {
            return 1
        }
    }

    addEvent = (name, place, price, capacidad, fecha) => {
        const event = {
            id: this.getNextID(),
            name,
            place,
            price: price + (price * this.#precioBaseDeGanancia),
            capacidad: capacidad || 50,
            fecha: fecha || new Date().toLocaleDateString(),
            participantes: []
        }

        this.events.push(event)
    }

}

const manager = new TicketManager()
manager.addEvent('Lolapaluza', 'Corferias', 100, 0, '')
manager.addEvent('Afterlife', 'Medellin', 240, 20, '')
console.log(manager.getEvents())