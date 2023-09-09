import { Router } from "express";
import { contactsService } from "../respositories/index.js";

const router = Router()

router.get('/', async (req, res) => {
    const result = await contactsService.getContacts()
    res.send({ status: 'success', payload: result })
})

router.post('/', async (req, res) => {
    const contactBody = req.body
    
    const result = await contactsService.createContact(contact)
    res.send({status: 'success', payload: result})
})

export default router