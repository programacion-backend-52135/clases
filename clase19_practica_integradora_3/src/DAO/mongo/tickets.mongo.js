import TicketModel from "./models/tickets.model.js";

export default class Ticket {
    constructor() {}

    get = async() => {return TicketModel.find() }
    create = async(data) => { return TicketModel.create(data) }
    getByID = async(_id) => { return TicketModel.findById(_id)}
    update = async(data) => { return TicketModel.updateOne({_id: data._id}, data) }
}