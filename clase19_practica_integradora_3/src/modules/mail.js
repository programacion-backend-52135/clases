import nodemailer from 'nodemailer'
import config from '../config/config.js'

export default class Mail {
    constructor() {
        this.transport = nodemailer.createTransport({
            service: 'gmail',
            port: 587,
            auth: {
                user: config.mailUser,
                pass: config.mailPass
            }
        })
    }

    send = async(user, subject, html) => {
        const result = await this.transport.sendMail({
            from: config.mailUser,
            to: user.email,
            subject,
            html
        })

        console.log(result)

        return result
    }
}