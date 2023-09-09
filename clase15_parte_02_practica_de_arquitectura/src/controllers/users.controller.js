

const usersService = new User()

export const getUsers = async (req, res) => {
    const result = await usersService.getUsers()
    res.send({ status: 'success', payload: result })
}

export const getUserByID = async (req, res) => {
    const { uid } = req.params
    const result = await usersService.getUserById(uid)

    res.send({ status: 'success', payload: result })
}

export const saveUsers = async (req, res) => {
    const user = req.body

    const result = await usersService.saveUser(user)
    res.send({ status: 'success', payload: result })
}