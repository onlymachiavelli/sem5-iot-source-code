import * as React from 'react'
import axios from 'axios'
import { AsyncStorage } from '.'

const useConsult = (navigation:any) =>{


    const [weight, setWeight] = React.useState("")
    const [height, setHeight] = React.useState("")
    //glecemia
    const [glucose, setGlucose] = React.useState("")
    const [blood, setBlood] = React.useState("")

    const [all, setAll] :any= React.useState()

    //conditions
    
    const [conditions, setConditions] : any = React.useState([])
    const [allergies, setAllergies] : any = React.useState([])
    const [medications, setMedications] : any = React.useState([])
    
    const GetData = async () =>{
        const token : any = await AsyncStorage.GetOne("token")
        if (!token) navigation.navigate("Signin")
        console.log("toke",token)

        const ip : any = await AsyncStorage.GetOne("ip")
        axios.get(`http://${ip}:3000/users/cleanData` , {headers:{
            Authorization:`Bearer ${token}` 
        }}).then(
            (res:any) =>{
                setBlood(String(res.data.blood_type))
                setGlucose(String(res.data.glycemia))
                setHeight(String(res.data.height))
                setWeight(String(res.data.weight))
                setConditions(res.data.conditions)
                setAllergies(res.data.allergies)
                setMedications(res.data.medications)
                setAll(res.data)
            }
            
            ).catch(e=>{
                console.log(e)
                console.log(e.response)
            })
            
        }
        
    return {
        weight, height, glucose, blood,

        GetData
        ,


        conditions, allergies, medications, 
        all, setAll
    }
}

export default useConsult