export default class ContactDTO {
    constructor(contact) {

        this.name = contact?.name ?? ''
        this.age = contact?.age ?? 0

        this.active = contact?.active ?? true
        this.phone = contact.phone ? contact.phone.split('-').join('') : ''
    }
}