export default class UserDTO {

    constructor(user) {
        this.name = user?.name ?? 'NN'
        this.email = user?.email ?? ''
        this.role = user?.role ?? 'user'
        this.orders = []
    }
}