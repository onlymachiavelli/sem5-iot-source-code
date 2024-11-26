import {RequestHandler} from 'express'
import Allergies from '../../models/PSchemas/Allergies.schema'
import * as Services from './../../services/notifications.services'
import * as UserServices from './../../services/health.services'
import Format from 'date-and-time'


const Create : RequestHandler =async (req, res, next) =>{
    //verify data :
    // id of the user notified
    // type
    // title
    //  
    if(!req.body.id||!req.body.type||!req.body.title||!req.body.description){
        res.status(400).send("invalid data")
        next()
        return 
    }

    const id = req.body.id

    //get the user that will receive the notification
    let user
    try{
        user = await UserServices.GetOne(id)
    }
    catch(e){
        console.log(e)
        res.status(404).send("couldn't get the user")
        next()
        return
    }

    //create the object 
    const date : any = new Date()
    const format : any = Format.format(
        date,
        'YYYY-MM-DD HH:mm:ss'
    )

    let datas = {
        author: user,
        type : req.body.type,
        title :req.body.title, 
        description :req.body.description,
        created_at : format
    }

    //save the data
    try{
        Services.Create(datas)
        res.status(200).send("notification added")
        next()
        return
    }
    catch(e){
        console.log(e)
        res.status(400).send("could't save notification")
        next()
        return
    }

    
}

export default Create