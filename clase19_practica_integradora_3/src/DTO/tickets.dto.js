export default class TicketCreateDTO {

    constructor(ticket) {
        this.name = ticket.name
        this.code = ticket.code
        this.description = ticket.description || ''
    }

}