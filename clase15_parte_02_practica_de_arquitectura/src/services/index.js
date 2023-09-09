import { User, Order, Store } from '../DAO/factory.js'
import UserRepository from './users.repository.js'
import OrderRepository from './orders.repository.js'
import StoreRepository from './stores.repository.js'

export const userService = new UserRepository(new User())
export const storeService = new StoreRepository(new Store())
export const orderService = new OrderRepository(new Order())