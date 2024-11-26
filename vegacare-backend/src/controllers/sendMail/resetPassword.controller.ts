import {RequestHandler} from 'express'
import {mailGenerator, transporter} from '../../utils/mailHandler'
import * as Services from '../../services/users.services'
import Jwt  from 'jsonwebtoken'
import Format from 'date-and-time'

const randomInt = (min : number, max : number) => Math.floor(Math.random() * (max - min + 1)) + min;

const resetPassword : RequestHandler = (req : any, res : any, next : any) => {
    const receiver : string = req.body.receiver
    console.log(receiver)
    if(!receiver){
        res.status(400).send("Incomplete data : No receiver")
        return
    }

    const name : string = req.body.name
    if(!name){
        res.status(400).send("Incomplete data : No name")
        return
    }

    const digits = 5
    const code : number = randomInt(10**digits,(10**(digits+1))-1)
    var email = {
        body: {
            name: `${name}`,
            intro: 'You have received this email because a password reset request for your account was received.',
            action: {
                instructions: 'Use this code to reset your password:',
                button: {
                    color: '#DC4D2F',
                    text: `${code}`,
                    link: ''
                }
            },
            outro: 'If you did not request a password reset, no further action is required on your part.'
        }
    };
    
    // Generate an HTML email with the provided contents
    var emailBody = mailGenerator.generate(email)
    
    // Generate the plaintext version of the e-mail (for clients that do not support HTML)
    var emailText = mailGenerator.generatePlaintext(email)

    if(!req.headers.authorization){
        res.status(401).send("No token")
        return
    }
    //get the token bearer 
    const [Bearer, token] : any = req.headers.authorization?.split(" ")

    if (!Bearer || !token) {
        res.status(401).send("No token")
        return
    }

    let payload : any
    try{
        payload = Jwt.verify(token, String(process.env.KEY)  || "")
    }
    catch(e){
        console.log(e)
        res.status(401).send("Invalid token")
        next()
        return
    }

    if(!payload){
        res.status(401).send("Invalid token")
        return
    }

    const id : any = payload.id
    const current : any = Format.format(
        new Date, 
        "YYYY-MM-DD HH:mm:ss"
    )

    try{
        Services.Update(id,{code:code,codeValidity:current}).then(()=>{
        }).catch((e)=>{
            console.log(e)
            res.status(400).send("couldn't change the password")
        })
    }
    catch(e){
        console.log(e)
        res.status(400)
        next()
        return
    }

    //Send the e-mail with your favorite mailer
    /*
    try{
        transporter.sendMail({
            from: process.env.MAILACCOUNT,
            to: `${receiver}`,
            subject: '[VegaCare] Reset your password',
            html: emailBody,
            text: emailText,
        }, function (err) {
        if (err) return console.log(err);
        console.log('Message sent successfully.');
        res.status(200).send('Message sent successfully.')
        });
    }catch(e){
        console.log(e)
        res.status(400).send('Message failled to be sent')
        next()
        return
    }
    */
    res.status(200).send('Message sent successfully.')

    

}

export default resetPassword