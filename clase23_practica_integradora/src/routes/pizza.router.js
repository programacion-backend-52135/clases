import { Router } from 'express'
import { createPizza, getPizzaById, getPizzas, removePizza, updatePizza } from '../controllers/pizza.controller.js'

const router = Router()

router.get('/', getPizzas)
router.get('/:id', getPizzaById)
router.post('/', createPizza)
router.put('/:id', updatePizza)
router.delete('/:id', removePizza)

export default router