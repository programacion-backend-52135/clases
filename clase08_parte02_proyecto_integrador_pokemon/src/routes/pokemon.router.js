import { Router } from "express";
import pokeModel from '../models/pokemon.model.js'

const router = Router()

// Listar pokemons
router.get('/', async (req, res) => {

    // .lean().exec() para que handlebars reconozca el modelo
    const pokemons = await pokeModel.find().lean().exec()
    
    res.render('list', { pokemons })
})

// Pagina para crear pokemons (render HTML)\
router.get('/create', async (req, res) => {
    res.render('create', {})
})

// Crear Pokemon POST 
router.post('/create', async (req, res) => {
    const pokemonNew = req.body
    console.log({ pokemonNew })

    const pokemonGenerated = new pokeModel(pokemonNew)
    await pokemonGenerated.save()

    //pokeModel.insertMany()

    console.log({ pokemonGenerated });

    res.redirect('/pokemon/' + pokemonGenerated.name)
})

// Borrar pokemon
router.get('/delete/:id', async (req, res) => {
    const id = req.params.id

    await pokeModel.deleteOne({ _id: id })
    res.redirect('/pokemon')
})

// Obtener un pokemon (name)
router.get('/:id', async (req, res) => {
    const id = req.params.id
    const pokemon = await pokeModel.findById(id)

    res.render('one', pokemon)
})



export default router

