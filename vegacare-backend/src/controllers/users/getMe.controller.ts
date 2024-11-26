import * as Express from 'express'
import Jwt  from 'jsonwebtoken'
import * as Services from './../../services/users.services'
import * as Serv from './../../services/health.services'


const GetMe:Express.RequestHandler = async (req, res, next) =>{
    
    if(!req.headers.authorization){
        res.status(401).send("No token")
        return
    }
    //get the token bearer 
    const [Bearer, token] : any = req.headers.authorization?.split(" ")
    console.log(req.headers.authorization)

    if (!Bearer || !token) {
        res.status(401).send("No token")
        return
    }
    //get payload 
    console.log("token : " , token)

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
    console.log(payload)
    //get the user from the database
    const user :any = await Services.GetOne("id",payload.id)
    let object :any= {
        user : {}, 
        health : {}
    }
    //check user 
    if (!user) {
        res.status(401).send("Unauthorized")
        return
    }
    object.user = user
    //now get health user from serv 
    
    if (user.type == "patient") {
        const healthUser = await Serv.GetOne(user.id)
        
        if (!healthUser) {
            res.status(401).send("Unauthorized")
            return
        }
        object.health = healthUser
    } 


    //send the data 
    res.status(200).send(object)

    


}

export default GetMe