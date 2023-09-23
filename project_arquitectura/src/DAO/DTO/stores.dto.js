export default class StoreDTO {

    constructor(store) {
        this.name = store?.name ?? 'NN'
        this.products = store?.products ?? []
    }
}