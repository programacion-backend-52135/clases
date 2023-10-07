import { User, Ticket } from '../DAO/factory.js'

import UserRepository from './users.repositories.js'
import TicketRepository from './tickets.repositories.js'

export const UserService = new UserRepository(new User())
export const TicketService = new TicketRepository(new Ticket())