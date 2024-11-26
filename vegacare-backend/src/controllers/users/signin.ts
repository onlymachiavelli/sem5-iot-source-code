import * as Express from 'express'
import * as Services from '../../services/users.services'
import Bcrypt from 'bcrypt'
import JWT from 'jsonwebtoken'
const SignIn : Express.RequestHandler = async (req, res) =>{
    //get the username and the password 
    if (!req.body.email ||!req.body.password ) {
        res.status(400).send("didn't get the email or the passowrd")
        return 
    }

    const email = req.body.email
    const password = req.body.password

    //get the user 
    const target : any = await Services.GetOne("email" , email)
    if (!target) {
        res.status(400).send("wrong user or password")
        return 
    }

    //get the pass 

    const pass : any = await Services.GetPass("email" , email)
    
    //compare the pass
    const compare : boolean = await Bcrypt.compare(password , pass.password)

    if (!compare) {
        res.status(400).send("wrong user or password")
        return
    }


    
    const token : any = JWT.sign({id : target.id} ,String(process.env.KEY) || "" , {expiresIn : "7d"})

    res.status(200).send({
        message : "logged in successfully" , 
        token  :token
    })

    return 

}       

export default SignIn