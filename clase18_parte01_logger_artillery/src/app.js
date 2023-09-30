import express from 'express'
import { addLogger, logger } from './utils/logger.js'

const app = express()

app.use(addLogger)

app.get('/test', (req, res) => {

    req.logger.fatal(`FATAL !!! `)
    req.logger.error(`Se cayo el server 👎 `)
    req.logger.warning(`Don't worry. Is just a warning`)
    req.logger.info(`Se llamo a esta url`)
    req.logger.debug(`1 +1 === 2`)

    res.send('Logger Testing')
})
app.get('/', (req, res) => res.send('Logger Testing'))
app.post('/', (req, res) => res.send('Logger Testing POST'))

app.listen(8080, () => {
    logger.info('Listening ...')
})