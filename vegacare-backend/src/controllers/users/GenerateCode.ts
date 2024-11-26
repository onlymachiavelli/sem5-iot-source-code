import { RequestHandler } from "express"

import * as Services from './../../services/users.services'
import Format from 'date-and-time'
import Users from "../../models/PSchemas/user.Schema"
import {mailGenerator,
    transporter} from './../../utils/mailHandler'
const Generate :RequestHandler = async (req, res, nxt)=>{


    //receive an  email 

    if (!req.body.email) {
        res.status(400).send("email is required")
        return
    }


    //check if the email exists in the database

    const target : any = await Services.GetOne(
        "email",
        req.body.email
    )

    if (!target) {
        res.status(404).send("User doesn't exist")
        return 
    }


    //generate a code 5 numbers 
    let randomCode: string | number = Math.floor((Math.random() * 9
        + 1) * 10000)

    //store it in db 
    const day : any = new Date
    const currentDate : any = Format.format(
        day,
        "YYYY-MM-DD HH:mm:ss"
    )

    //update users 
    const id : any = target.id
    const datas : any = {
        code: randomCode,
        codeValidity: currentDate
    }
    try{
        await Services.Update(id, datas)
        //send it in email 
    let mail :any = {
        body: {
            name: `${target.fullname}`,
            intro: 'You have received this email because a password reset request for your account was received.',
            action: {
                instructions: `The code to restore your password is : ${randomCode}`,
                button: {
                    color: '#DC4D2F',
                    text: "It wasn't me !",
                    link: 'https://www.google.com/'
                }
            },
            outro: 'If you did not request a password reset, no further action is required on your part.'
        }
    }
    
    let emailBody = mailGenerator.generate(mail)
    let emailText = mailGenerator.generatePlaintext(mail)

    try{
        transporter.sendMail({
            from: process.env.MAILACCOUNT,
            to: `${target.email}`,
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
        nxt()
        return
    }
    }
    catch(e){
        console.log(e)
        res.status(400).send("couldn't update the user")
        return
    }


    

    res.status(200).send("dONE sending")


    nxt()




}

export default Generate