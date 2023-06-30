import express from 'express'
import productRouter from './routes/product.router.js'
import cartRouter from './routes/cart.router.js'

const app = express()
app.use(express.json())

app.use('/api/products', productRouter)
app.use('/api/carts', cartRouter)

app.listen(8080)