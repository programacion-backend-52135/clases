import { User } from '../DAO/factory.js'

const userDao = new User()

export default class UserService {
    get = async() => {
        return await userDao.get()
    }

    getById = async(id) => {
        return await userDao.getById(id)
    }

    getByEmail = async(email) => {
        return await userDao.getByEmail(email)
    }

    create = async(object) => {
        try {
            return await userDao.create(object)
        } catch (error) {
            return {}
        }
    }

    update = async(id, object) => {
        return await userDao.update(id, object)
    }

    remove = async(id) => {
        return await userDao.remove(id)
    }
}