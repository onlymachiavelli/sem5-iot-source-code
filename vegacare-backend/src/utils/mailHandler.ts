import Mailgen from 'mailgen'
import * as nodemailer from 'nodemailer'


const mailGenerator = new Mailgen({
    theme: 'default',
    product: {
        // Appears in header & footer of e-mails
        name: 'VegaCare',
        link: 'https://talan.com/'
        // Optional logo
        // logo: 'https://mailgen.js/img/logo.png'
    }
});

const config = {
    service : "gmail",
    auth : {
        user : String(process.env.MAILACCOUNT),
        pass : String(process.env.MAILPASS)
    }
}

const transporter = nodemailer.createTransport(config)

export {
    mailGenerator,
    transporter
}

