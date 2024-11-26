import {RequestHandler} from 'express'
import * as Services from './../../services/medications.sevices'

const Delete : RequestHandler =async (req, res, next) =>{
    const id : any = req.params.id

    try{
        await Services.Delete(id).then((resp)=>{
            res.status(201).send("Done deleting the condition") 
        }).catch((e)=>{
            res.status(400).send("Error deleting the condition")
            console.log(e)
        })
    }
    catch(e){
        console.log(e)
        next()
    }
    
}

export default Delete