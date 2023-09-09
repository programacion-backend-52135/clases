export default class OrderDTO {

    constructor(order) {
        this.number = order?.number ?? 0
        this.user = order?.user ?? 0
        this.status = order?.status ?? 'pending'
        this.totalPrice = order?.totalPrice ?? 0
    }
}