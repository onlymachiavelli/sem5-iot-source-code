import {RequestHandler} from 'express'
import Medications from '../../models/PSchemas/Medications.schema'
import * as Services from '../../services/medications.sevices'
import Format from 'date-and-time'


const Update : RequestHandler =async (req, res, next) =>{
    const id : any = req.params.id

    const title = req.body.title
    if (!title) {
        res.status(400).send("Verify your data")
        return 
    }
    const condi : any = new Medications
    condi.title = title
    const date : any = new Date()
    const format : any = Format.format(
        date,
        'YYYY-MM-DD HH:mm:ss'
    )
    condi.updated_at = format

    try{
        await Services.Update(id, condi).then((resp)=>{
            res.status(201).send("Done updating the condition")
        }).catch((e)=>{
            res.status(400).send("Error updating the condition")
            console.log(e)
        })
    }
    catch(e){
        console.log(e)
        next()
    }
    
}

export default Update