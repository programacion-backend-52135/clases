import express from 'express'

const app = express()

const users = [
    { gender: 'male', id: 1, name: 'Eri' },
    { gender: 'male', id: 2, name: 'Augusto' },
    { gender: 'female', id: 3, name: 'Ileana Brotsky' },
    { gender: 'male', id: 4, name: 'Diego Aguero' },
    { gender: 'female', id: 5, name: 'Silvia Quinteros' },
    { gender: 'female', id: 6, name: 'Andrea Rodriguez' },
    { gender: 'male', id: 7, name: 'Valentin Abalo' },
]

app.get('/', (req, res) => {
    let genderSentByUser = req.query.gender

    if(genderSentByUser) {
        genderSentByUser = genderSentByUser.toLowerCase()
        const userFiltered = users.filter(u => u.gender === genderSentByUser)
        return res.send(userFiltered)
    }

    res.send(users)
})

app.get('/:id', (req, res) => {
    const id = parseInt(req.params.id)

    const user = users.find(u => u.id === id)

    if (!user) res.send({ error: 'User not found' })
    else res.send(user)
})

app.listen(8080)

// http://127.0.0.1:8080/?gender=female