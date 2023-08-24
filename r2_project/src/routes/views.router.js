import { Router } from "express";
import ProductManager from '../DAO/fileManager/product.manager.js'
import ProductModel from '../DAO/mongoManager/models/product.model.js'
import passport from "passport";

const router = Router()
const productManager = new ProductManager()

router.get('/list', async (req, res) => {

    const page = parseInt(req.query?.page || 1)
    const limit = parseInt(req.query?.limit || 5)

    // Prepare Query
    const queryParams = req.query?.query || '' //query=price,5
    const query = {}

    if (queryParams) {
        const field = queryParams.split(',')[0]
        let value = queryParams.split(',')[1]

        if (!isNaN(parseInt(value))) value = parseInt(value)

        query[field] = value
    }
    //*************************************** */
    const result = await ProductModel.paginate(query, {
        page,
        limit,
        lean: true
    })

    res.render('productsList', result)
})






router.get(
    '/auth/google',
    passport.authenticate( 'google', { scope: ['profile', 'email' ] } ),
    (req, res) => { }
)

router.get(
    '/callback-google',
    passport.authenticate('google', {failureRedirect: '/'}), (req, res) => {
    res.send('Logged !!')
})









router.get('/', async (req, res) => {
    const products = await productManager.list()
    res.render('products', { products })
})



router.get('/products-realtime', async (req, res) => {
    const products = await productManager.list()
    res.render('products_realtime', { products })
})

router.get('/form-products', async (req, res) => {
    res.render('form', {})
})

router.post('/form-products', async (req, res) => {
    const data = req.body
    const result = await ProductModel.create(data)

    res.redirect('/')
})

export default router