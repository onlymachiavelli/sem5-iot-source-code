import axios from 'axios'
import * as React from 'react'

import { AsyncStorage } from '.'

const useGetData = () =>{



    const [conditions, setConditions] = React.useState([])
    const [medications, setMedications] = React.useState([])
    const [allergies, setAllergies] = React.useState([])

    
    //get conditions 

    
    
    const GetConditions =async() =>{
        const ip : any = await AsyncStorage.GetOne("ip")
        //suppose without a token 
        await axios.get(`http://${ip}:3000/conditions`).then((res:any)=>{

            setConditions(res.data)
        }).catch((e)=>{
            console.log(e)
            
        })

    }


    const GetMedications = async () =>{
        const ip : any = await AsyncStorage.GetOne("ip")
        await axios.get(`http://${ip}:3000/medications`).then((res:any)=>{

            setMedications(res.data)
        }).catch((e)=>{
            console.log(e)
            
        })


    }

    const GetAllergies = async () =>{
        const ip : any = await AsyncStorage.GetOne("ip")
        await axios.get(`http://${ip}:3000/allergies`).then((res:any)=>{

            setAllergies(res.data)
        }).catch((e)=>{
            console.log(e)
            
        })


    }
    return {
        conditions, allergies , medications,
        GetConditions, GetMedications, GetAllergies
    
    }
}


export default useGetData