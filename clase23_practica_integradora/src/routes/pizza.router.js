import { Router } from 'express'
import { createPizza, getPizzaById, getPizzas, removePizza, updatePizza } from '../controllers/pizza.controller.js'
import { auth, passportJWT } from '../utils.js'

const router = Router()

router.get('/', getPizzas)
router.get('/:id', getPizzaById)
router.post('/', passportJWT(), auth('admin'), createPizza)
router.put('/:id', updatePizza)
router.delete('/:id', removePizza)

export default router