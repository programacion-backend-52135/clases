import express from 'express'
import nodemailer from 'nodemailer'
import twilio from 'twilio'
import __dirname from './utils.js'

const TWILIO_ACCOUNT_SID = 'AC2e2a8660adede115f63ddca901e5ade8'
const TWILIO_AUTHO_TOKEN = 'd12efdfaef57558fd2b369d1f571f82d'
const TWILIO_SMS_NUMBER = '+12564154832'

const app = express()
const transport = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: 'r2coderhouse@gmail.com',
        pass: 'rjyneosjatqblvku'
    }
})

const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTHO_TOKEN)

app.get('/mail', async(req, res) => {
    const result = await transport.sendMail({
        from: 'r2coderhouse@gmail.com',
        to: ['r2coderhouse@gmail.com', 'valentinabalo9@gmail.com'],
        subject: 'Felicitaciones por tu nuevo trabajo !!',
        html: `
            <div>
                Bienvenido a tu nuevo puesto de Senior Backend
                <br> Tu salario es <b>140.000 USD</b> per year.
                <img src="cid:image1" />
            </div>
        `,
        attachments: [
            {
                filename: 'spider.jpg',
                path: `${__dirname}/images/spider.jpg`,
                cid: 'image1'
            }
        ]
    })

    console.log(result)
    res.send('Email sent')
})

app.get('/sms', async(req, res) => {
    const result = await client.messages.create({
        body: 'You have been hired',
        from: TWILIO_SMS_NUMBER,
        to: '+😅'
    })

    console.log(result)
    res.send('SMS sent!')
})

app.listen(8080, () => console.log('Listening...'))