import * as Serv from './../../services/health.services'
import {RequestHandler} from 'express'
import Jwt  from 'jsonwebtoken'



const appendData : RequestHandler = async (req, res, next) => {
    //get the id by the token
    const id : number = getIDFromToken(req.headers.authorization, res)
    if(id==-1){
        next()
        return
    }
    //check if data is valid
    //data to check : 
    //  type
    //  time
    //  value
    if(!req.body.type||!req.body.time||!req.body.value){
        res.status(400).send("invalid data")
        next()
        return
    }   

    let object : any

    //format data according to the different type : heart, oxygen, temperature, location
    switch(req.body.type){
        case "heart" :
            object  = {beat:req.body.value,time:req.body.time}
            break
        case "oxygen" :
            object = {mm:req.body.value,time:req.body.time}
            break
        case "temperature" :
            object = {temperature:req.body.value,time:req.body.time}
            break
        case "location" :
            if(!req.body.value.x||!req.body.value.y||!req.body.value.steps){       
                res.status(400).send("location data invalid")
                next()
                return
            }
            object = {x:req.body.value.x,y:req.body.value.y,steps:req.body.value.steps,time:req.body.time}
            break
        default :
            res.status(400).send("invalid type")
            next()
            return
    }


    try{
        //get previous data
        let healthUser : any = await Serv.GetOne(id)
        console.log(healthUser.Monitor)
        if(!healthUser){
            res.status(404).send("couldn't get the user")
            next()
            return
        }
        //append the data
        healthUser.Monitor[req.body.type].push(object)
        //save the data
        healthUser.save()
    
        res.status(200).send("adding data succesfully")
        next()
        return
    }
    catch(e){
        console.log(e)
        res.status(400).send("error adding the data")
        next()
        return
    }

}


const getIDFromToken : any = (authorization : any, res : any) => {
    if(!authorization){
        res.status(401).send("No token")
        console.log("No auth")
        return -1
    }
    //get the token bearer 
    const [Bearer, token] : any = authorization?.split(" ")


    if (!Bearer || !token) {
        res.status(401).send("No token")
        console.log("no token or bearer")
        return -1
    }
    //get payload 
    //console.log("token : " , token)

    let payload : any
    try{
        payload = Jwt.verify(token, String(process.env.KEY)  || "")
    }
    catch(e){
        console.log(e)
        res.status(401).send("Invalid token")
        return -1
    }
    if(!payload){
        res.status(401).send("Invalid token")
        return -1
    }

    return payload.id
}

export default appendData