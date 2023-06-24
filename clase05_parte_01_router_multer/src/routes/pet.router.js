import { Router } from 'express'

const router = Router()
const pets = []

router.use((req, res, next) => {
    console.log('Esto es solo de Mascotas')
    next()
})

router.get('/', (req, res) => {
    res.send({ pets, data: req.data })
})

router.post('/', (req, res) => {
    const pet = req.body
    pets.push(pet)

    res.send({status: 'success'})
})

export default router