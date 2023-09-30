import winston from 'winston'

const customLevelOptions = {
    levels: {
        fatal: 0,
        error: 1,
        warning: 2,
        info: 3,
        debug: 4
    },
    colors: {
        fatal: 'red',
        error: 'orange',
        warning: 'yellow',
        info: 'blue',
        debug: 'white'
    }
}

// const logger = winston.createLogger({
//     transports: [
//         new winston.transports.Console({ level: 'http' }),
//         new winston.transports.File({filename: './errors.log', level: 'warn'})
//     ]
// })

isProd = process.env.APP_ENV === 'production'
    
export const logger = winston.createLogger({
    levels: customLevelOptions.levels,
    transports: [
        new winston.transports.Console({
            level: isProd ? 'error' : 'info',
            format: winston.format.combine(winston.format.simple())
        }),
        new winston.transports.File({
            filename: './errors.log',
            level: 'warning',
            format: winston.format.simple()
        })
    ]
})


export const addLogger = (req, res, next) => {
    req.logger = logger
    
    req.logger.info(`${req.method} on ${req.url} - ${new Date().toLocaleTimeString()}`)

    next()
}