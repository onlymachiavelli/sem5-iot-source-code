import * as React from 'react'
import axios from 'axios'
import * as AsyncStorage from './AsyncStorage'

const useGetMe = (navigation:any) =>{


    const [user, setUser] :any= React.useState("")
   
    
    
    const GetMe = async() =>{
        
        const token = await AsyncStorage.GetOne("token")
        if (!token) {
            console.log("error")
            navigation.navigate("Signin")
        }
        //ip 
        const ip : any = await AsyncStorage.GetOne("ip")
        await axios.get(`http://${ip}:3000/users/me`, {
            headers : {
                Authorization : `Bearer ${token}`
            }
        }).then((res : any) =>{
            setUser(res.data)
        }).catch((e)=>{
            setUser("ERR")
            console.log(e)
        })
    }


    return {
        GetMe, 
        user, 
    }
}


export default useGetMe