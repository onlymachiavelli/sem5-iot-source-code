import {RequestHandler} from 'express'
import bcrypt from 'bcrypt'
import * as Services from '../../services/users.services'
import Format from 'date-and-time'

const resetPassword : RequestHandler = async (req : any, res : any, next : any) => {
    const password : any = req.body.password
    if(!password){
        res.status(401).send("password is invalid")
        return
    }

    const mail = req.body.mail
    if(!mail){
        res.status(401).send("mail is invalid")
        return
    }

    let user : any;
    try{
        user = await Services.GetOne("email",mail).then()
    }
    catch(e){
        console.log("couldn't get the user")
        res.status(404).send("couldn't get the user")
        return
    }

    const id : any = user.id
    const realCode : any = 1234 //should be in user data
    const currentTime : any = new Date()
    const created_at : any = user.codeValidity
    const expiresIn : number = 5

    if(!realCode||(Format.subtract(created_at,currentTime).toMinutes()<expiresIn)){
        res.status(401).send("no change has been asked or delay expired")
        return
    }

    if(realCode!=req.body.code){
        res.status(401).send("code is invalid")
        return
    }

    const saltRound: number = Number(process.env.SALT )
    const  hashedPassword = await bcrypt
      .genSalt(saltRound)
      .then((s) => bcrypt.hash(password, s))

    let datas : any = {
        password:hashedPassword,
        updated_at: Format.format(new Date, "YYYY-MM-DD HH:mm:ss"),
        code: null,
        codeValidity : 0
    }

    try{
        Services.Update(id,{password:hashedPassword}).then(()=>{
            res.status(200).send("changed password successfully")
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



}



export default resetPassword