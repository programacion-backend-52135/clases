import { Pizza } from '../DAO/factory.js'

const pizzaDao = new Pizza()

export default class PizzaService {
    get = async() => {
        return await pizzaDao.get()
    }

    getById = async(id) => {
        return await pizzaDao.getById(id)
    }

    create = async(object) => {
        try {
            return await pizzaDao.create(object)
        } catch (error) {
            return {}
        }
    }

    update = async(id, object) => {
        return await pizzaDao.update(id, object)
    }

    remove = async(id) => {
        return await pizzaDao.remove(id)
    }
}