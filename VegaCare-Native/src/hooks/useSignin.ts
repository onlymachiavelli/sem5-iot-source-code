import * as React from 'react'
import axios from 'axios'
import * as AsyncStorage from './AsyncStorage'
import { ToastAndroid } from 'react-native'
const useSignin = (navigation:any) =>{

    const [email , setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
   
    
    const [result, setResult] : any = React.useState()
    const Login = async () =>{
        setResult()
        const body : any ={
       
            email : email,   
            password : password
        }
        //check the data before sending the request, 
        //do it later, 
         const ip : any = await AsyncStorage.GetOne("ip")
        axios.post(`http://${ip}:3000/users/login` , body).then((res)=>{
            console.log(res)
            if (res.status == 200) {
                AsyncStorage.SetOne("token" , res.data.token)
                ToastAndroid.show(
                    "Authenticated, Heading to your Dashboard", 
                    ToastAndroid.SHORT
                )
                setEmail("")
                setPassword("")
                
                setResult(res.data)
                navigation.navigate("Dashboard")



            }
            else {
                ToastAndroid.show(
                    "Please Check your credentials", 
                    ToastAndroid.SHORT
                )

                setResult(res.data)
            }
            
            return res.data
        })
        .catch((e:any)=>{
            console.log((e))
            ToastAndroid.show(
                "Please Check your credentials", 
                ToastAndroid.SHORT
            )
            setResult(e.response)

            return e.response 
        })
    }   

    

    return {
        Login,
        email,  password, 
        setEmail,
        setPassword,
        result
    }
}

export default useSignin