import TicketCreateDTO from '../DTO/tickets.dto.js'

export default class TicketRepository {
    constructor(dao) {
        this.dao = dao
    }

    get = async() => { return this.dao.get() }
    getByID = async(id) => { return this.dao.getByID(id) }
    create = async(data) => {
        const dataToInsert = new TicketCreateDTO(data)
        const result = await this.dao.create(dataToInsert)

        return result
    }

        
}