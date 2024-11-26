import * as Express from 'express'

import * as UsersServices from './../../services/users.services'
import * as Services from './../../services/relations.service'
import Format from 'date-and-time'
import Jwt from 'jsonwebtoken'
import Relations from '../../models/PSchemas/relations.entity'
import Users from '../../models/PSchemas/user.Schema'


const Create : Express.RequestHandler = async (req ,res,next) => {
    const id : number = getIDFromToken(req.headers.authorization, res)
    if(id==-1){
        next()
        return
    }

    const user : any = await UsersServices.GetOne("id", id)

    const current : any = Format.format(
        new Date, 
        "YYYY-MM-DD HH:mm:ss"
    )

    if(!req.body.name||!req.body.phone){
        res.status(401).send("invalid data")
        next()
        return
    }

    let ContactUser : any = await UsersServices.GetOne("phone", req.body.phone)
    let relation = new Relations()
    console.log(ContactUser)
    switch(user.type){
        case "patient":

            relation.phone = req.body.phone
            relation.patients = [user]
            relation.name = ContactUser ? ContactUser.fullname : req.body.name
            relation.status ="approuved"
            relation.created_at = current
            relation.updated_at = current

            if(!ContactUser){
                relation.status = "Pending"
            }
            break
        case "supervisor":
            relation.phone = req.body.phone
            relation.patients = [ContactUser]
            relation.name = user.fullname || req.body.name
            relation.status ="pending"
            relation.created_at = current
            relation.updated_at = current

            break
        default:
            res.status(401).send("invalid user type")
            next()
            return
    }
    console.log(relation)
    Services.Save(relation).then((r : any) => {
        res.status(200).send("relation created")
    }).catch((e) =>{
        console.log(e)
        res.status(500).send("couldn't save in DB")
    })

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
    console.log("token : " , token)

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

export default Create