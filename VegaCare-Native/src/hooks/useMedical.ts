import * as React from 'react'
import { AsyncStorage } from '.'
import axios from 'axios'
import {ToastAndroid} from 'react-native'
const useMedical =(navigation:any)=>{

    //prepare the states 
    const [weight, setWeight] : any = React.useState("")
    const [height, setHeight] : any = React.useState("")
    //glecemia 
    const [glucose, setGlucose] : any = React.useState("")
    const [blood, setBlood] = React.useState("")

    const [aller, setAll] :any = React.useState("")
      const [cond, setCond] :any = React.useState("")
      const [med, setMed] : any = React.useState("")
      
      const Update = async()=>{
        const reqBody :any = {
            weight : weight, 
            height : height ,
            conditions :cond, 
            allergies : aller, 
            medications : med , 
            blood_type : blood, 
            glycemia : glucose,
        }
        console.log(reqBody)
        const token = await AsyncStorage.GetOne("token")
        if (!token) {
            console.log("error")
            navigation.navigate("Signin")
        }
        const ip : any = await AsyncStorage.GetOne("ip") 
        console.log("get token", token)
        await axios.patch(`http://${ip}:3000/users`,reqBody, {
            headers : {
                Authorization : `Bearer ${token}`
            }
        }
            
        ).then((res)=>{
            ToastAndroid.show("Updated", ToastAndroid.SHORT)
        }).catch(e=>{
            console.log(e)
            ToastAndroid.show("Didn't update the datas ! " , ToastAndroid.SHORT)
        })
        
      }
    return {



        Update,
        height , setHeight, weight, setWeight, glucose, setGlucose, blood, setBlood
        ,aller, setAll, cond, setCond, med, setMed
    }
}


export default useMedical