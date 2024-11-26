import {RequestHandler} from 'express'
import * as Services from '../../services/relations.service'


const GetAll : RequestHandler =async (req, res) =>{
    const datas : any = await Services.GetAll()
    if(datas.length<=0)
    {
        res.status(404).send("There is no data")
        return
    } 
    res.status(200).send(datas)
}

export default GetAll