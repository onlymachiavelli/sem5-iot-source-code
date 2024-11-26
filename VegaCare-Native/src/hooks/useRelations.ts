import * as React from 'react'
import axios from 'axios'
import * as AsyncStorage from './AsyncStorage'
import { ToastAndroid } from 'react-native'


const useRelations:any = () =>{

    //assuming saving one, keep in mind, the patient is the one who add the relations

    const [name, setName] : any = React.useState("")
    const [phone, setPhone] : any = React.useState("")
    const [relations, setRelations] : any = React.useState()
    //save data

    const SaveRelation = async (name : any, phone : any) =>{
        
        const token : any = await AsyncStorage.GetOne("token")
        const body : any ={
       
            name : name,   
            phone : phone,
        }
        
        const ip : any = await AsyncStorage.GetOne("ip")

        axios.post(`http://${ip}:3000/relations` , body,{headers:{Authorization:`Bearer ${token}` }}).then((res)=>{
            console.log(res)
            if (res.status == 200) {
                ToastAndroid.show(
                    "Contact added", 
                    ToastAndroid.SHORT
                )
            }
            else {
                ToastAndroid.show(
                    "Couldn't add contact", 
                    ToastAndroid.SHORT
                )
            }
            
            return res.data
        })
        .catch((e:any)=>{
            console.log((e))
            ToastAndroid.show(
                "Couldn't add contact", 
                ToastAndroid.SHORT
            )

            return e.response 
        })
    }

    //accept pendings 
    const AcceptOrRefuse = async (isAccepted:any) =>{
        const token : any = await AsyncStorage.GetOne("token")
        const body : any ={
       
            isValid : isAccepted,   
        }
        
        const ip : any = await AsyncStorage.GetOne("ip")

        axios.post(`http://${ip}:3000/relations/validate` , body,{headers:{Authorization:`Bearer ${token}` }}).then((res)=>{
            console.log(res)
            if (res.status == 200) {
                ToastAndroid.show(
                    "succes", 
                    ToastAndroid.SHORT
                )
            }
            else {
                ToastAndroid.show(
                    "error", 
                    ToastAndroid.SHORT
                )
            }
            
            return res.data
        })
        .catch((e:any)=>{
            console.log((e))
            ToastAndroid.show(
                "error", 
                ToastAndroid.SHORT
            )

            return e.response 
        })
    }

    //get all Relations
    const GetRelations = async()=>{
        const token : any = await AsyncStorage.GetOne("token")
        const body : any ={  
        }
        
        const ip : any = await AsyncStorage.GetOne("ip")
        console.log("requesting")

        await axios.post(
            `http://${ip}:3000/relations/getRelated` ,
            body,
            {headers:{Authorization:`Bearer ${token}` }}

        ).then(res=>{
            //console.log("yay" , res.data[0].name) 
            setRelations(res.data)
        }).catch(r=>{
            //console.log("shit" , r)
            setRelations([])
        })
        
    }

    return {
        name , setName, relations, setRelations, phone, setPhone, SaveRelation, AcceptOrRefuse, GetRelations
    }
}

export default useRelations