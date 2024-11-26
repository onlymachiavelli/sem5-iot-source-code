import * as Express from 'express'
import Jwt  from 'jsonwebtoken'
import * as Services from './../../services/users.services'

import * as AllergiesService from './../../services/allergies.sevices'
import * as MedicationsService from './../../services/medications.sevices'
import * as ConditionsService from './../../services/conditions.services'

const GetCleanData : Express.RequestHandler = async (req : any, res : any, next : any) => {
    //verify authentification
    console.log("header",req.headers.authorization)
    if(!req.headers.authorization){
        console.log("No fucking token")

        res.status(401).send("No token")
        return
    }
    console.log(req.headers.authorization)
    //get the token bearer 
    const [Bearer, token] : any = req.headers.authorization?.split(" ")


    if (!Bearer || !token) {
    console.log("No token")
    
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
        console.log("unvalid payload 1")
        res.status(401).send("Invalid token")
        next()
        return
    }

    if(!payload){
        console.log("unvalid payload")

        res.status(401).send("Invalid token")
        return
    }
    console.log(payload)

    const id : any = payload.id

    const rawUserData :any = await Services.GetOne("id",id)
    //check user 
    console.log("raw" ,rawUserData)
    
    if (rawUserData.type != "patient") {
        res.status(401).send("Unauthorized")
        return
    }

    let IdAller : any = rawUserData.allergies.split(",")
    const IdCond : any = rawUserData.conditions.split(",")
    const IdMed : any = rawUserData.medications.split(",")



    let allerg : any = []
    let condi:any = []
    let med : any = []
    //now get each one of them in the shit 
    for (let i =0;i<IdAller.length;i++){
        try{

            const row = await AllergiesService.GetBy(Number(IdAller[i]),"id")
            allerg.push(row)
        }
        catch(e){
            console.log(e)
        }
    }

    for (let i =0;i<IdCond.length;i++){
        try{

            const row = await ConditionsService.GetBy(Number(IdCond[i]),"id")
            condi.push(row)
        }
        catch(e){
            console.log(e)
        }
    }


    for (let i =0;i<IdMed.length;i++){
        try{

            const row = await MedicationsService.GetBy(Number(IdMed[i]),"id")
            med.push(row)
        }
        catch(e){
            console.log(e)
        }
    }


    

    


    let allr : any = []
    //allergies 
    const targets = [1,2,3]
    targets.map(async(data: any, index:any)=>{
        const element :any =  await AllergiesService.GetBy(data, "id")
        console.log("thing",element )
        if (element)allr.push(element)
    })

    console.log("results", allr)

    //send the data 
    res.status(200).send({
        name: rawUserData.fullname ,
        gender : rawUserData.gender, 
        bday : rawUserData.bday,
        
        height: rawUserData.height || "0",
        weight: rawUserData.weight || "0",
        blood_type: rawUserData.blood_type,
        glycemia: rawUserData.glycemia,
        allergies:allerg,
        conditions: condi,
        medications: med
    })

    
}

export default GetCleanData