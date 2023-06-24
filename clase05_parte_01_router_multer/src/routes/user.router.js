import { Router } from 'express'

const router = Router()
const users = []

router.get('/', (req, res) => {
    res.send({ users, data: req.data || 'No data' })
})

router.get('/user', (req, res) => {
    res.send('Deevuelve todos los users')
})

router.post('/', (req, res) => {
    const user = req.body
    users.push(user)

    res.send({status: 'success'})
})

export default router