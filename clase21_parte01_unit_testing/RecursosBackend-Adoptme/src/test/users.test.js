import User from '../dao/Users.dao.js'
import Assert from 'assert'
import chai from 'chai'
import mongoose from 'mongoose'

// Modulo nativo de Node para validar los test
const assert = Assert.strict
// Expect de chai es mas utilizado en la instria
const expect = chai.expect

describe('Testing Users Dao', function() {

    before(function (done) {
        mongoose.connect('mongodb://admin:admin@127.0.0.1:27017', { 
            dbName: 'clase21_52135_01_test' 
        }).then(() => {console.log('DB connected'); done()})
        
        this.timeout(8000)
    })

    after(function() {
        mongoose.connection.collections.users.drop()
        this.timeout()
    })

    describe('Run', function() {
        it('El dao debe poder obtener los usuarios', async function() {
            const usersDao = new User()
            const result = await usersDao.get()

            assert.strictEqual(Array.isArray(result), true)
            expect(result).to.be.deep.equal([])
        })

        it('El dao debe poder crear usuarios', async function() {
            let mockUser = {
                first_name: 'Valentin',
                last_name: 'Abalo',
                email: 'valentin@meta.com',
                password: 'secret'
            }

            const userDao = new User()
            const result = await userDao.save(mockUser)

            assert.ok(result._id)
        })

        it('El dao pueda crear usuarios con una lista de mascotas vacia', async function() {
            let mockUser = {
                first_name: 'Otro',
                last_name: 'Otro',
                email: 'otro@meta.com',
                password: 'secret'
            }

            const userDao = new User()
            const result = await userDao.save(mockUser)

            assert.deepStrictEqual(result.pets, [])
        })

        it('El dao debe poder buscar por email', async function() {
            const usersDao = new User()

            const user = await usersDao.getBy({ email: 'valentin@meta.com'})

            assert.strictEqual(typeof(user), 'object')
            assert.strictEqual(user.first_name, 'Valentin')
        })


    })

})