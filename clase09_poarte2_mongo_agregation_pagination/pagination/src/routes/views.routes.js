import { Router } from 'express'
import userModel from '../models/users.model.js'

const router =  Router()

router.get('/', async (req, res) => {
    const page = parseInt(req.query?.page || 1)
    const limit = parseInt(req.query?.limit || 10)

    const result = await userModel.paginate({}, {
        page,
        limit,
        lean: true // Pasar a formato JSON
    })

    result.prevLink = result.hasPrevPage ? `/?page=${result.prevPage}&limit=${limit}` : ''
    result.nextLink = result.hasNextPage ? `/?page=${result.nextPage}&limit=${limit}` : ''

    console.log(result)

    res.render('users', result)
})

export default router