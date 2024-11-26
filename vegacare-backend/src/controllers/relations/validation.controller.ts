import * as Express from 'express'

import * as UsersServices from './../../services/users.services'
import * as Services from './../../services/relations.service'
import Format from 'date-and-time'
import Jwt from 'jsonwebtoken'

const Validation : Express.RequestHandler = (req,res,next) => {
    const isValid = req.body.isValid
    const relationID = req.body.id

    if(!isValid){
        res.status(401).send("invalid datas")
        next()
        return
    }

    try{
        switch(isValid){
            case "valid" :
                // update pending to Approuved
                Services.Update(relationID,{status:"approuved"})
                res.status(200).send("relation approuved")
                break
            case "rejected" : 
                // delete or change to Refused or something
                Services.Delete(relationID)
                res.status(200).send("relation rejected")
                break
            default :
                res.status(401).send("invalid datas")
                next()
                return
    
        }
    }
    catch(e){
        console.log(e)
        res.status(400).send("couldn't acces the DB")
        next()
        return
    }
    
}

export default Validation