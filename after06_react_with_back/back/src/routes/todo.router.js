import { Router } from 'express';
import Todo from '../db/todo.manager.js';

const router = Router();
const todo = new Todo();

router.get('/', (req, res) => {
    todo.list().then(r => {
        res.json(r)
    })
})

router.post('/', (req, res) => {
    todo.create(req.body).then(r => {
        res.json(r)
    })
})

router.get('/:id', (req, res) => {
    todo.getById(req.params.id).then(r => {
        res.json(r)
    })
})

router.put('/:id', (req, res) => {
    const todoBody = req.body
    todoBody.id = parseInt(req.params.id)

    todo.update(todoBody).then(r => {
        res.json(r)
    })
})

router.delete('/:id', (req, res) => {
    todo.delete(req.params.id).then(r => {
        res.json(r)
    })
})

export default router;