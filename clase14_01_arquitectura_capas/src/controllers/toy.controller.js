import ToyService from "../services/toy.serivce.js";

const toyService = new ToyService()

export const getAll = (req, res) => {
    const { limit } = req.query
    res.json(toyService.getAll(limit))
}

export const getCheapest = (req, res) => {
    const { limit } = req.query
    res.json(toyService.getCheapest(limit))
}

export const create = (req, res) => {
    const data = req.body

    res.json(toyService.create(data))
}
