class ToyModel {

    constructor() {
        this.db = []
    }

    /**
     * @param query string
     * @returns []
     */
    getAll = () => {
        return this.db
    }

    create = data => {

        data.price = data?.price ?? 1000

        this.db.push(data)

        return {
            newData: data,
            result: true
        }
    }

}

export default ToyModel