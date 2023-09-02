import ToyModel from "../models/toy.models.js";

class ToyService {

    constructor() {
        this.toyModel = new ToyModel()
    }

    getAll = limit => {
        const data = this.toyModel.getAll()
        
        return this.getLimit(data, limit)
    }

    getCheapest = (limit) => {
        const data = this.toyModel.getAll()
            .sort((t1, t2) => t1.price > t2.price )

        return this.getLimit(data, limit)
    }

    #getLimit (data, limit) {
        const end = limit <= data.length ? limit : data.length
        return data.slice(0, end)
    }

    create = data => {
        return this.toyModel.create(data)
    }

}

export default ToyService

