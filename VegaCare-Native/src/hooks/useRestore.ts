import * as React from 'react'

import axios from 'axios'
import { AsyncStorage } from '.'
import {ToastAndroid} from 'react-native'

const useRestore = (navigation:any)=>{
    const [email, setEmail] : any = React.useState("")
    const [code, setCode] :  any = React.useState("")
    const [password, setPass] : any = React.useState("")

    const Request = async () =>{
        const ip : any = await AsyncStorage.GetOne("ip")
        axios.post(`http://${ip}:3000/users/reqReset`, {
            email : email
        }).then((res)=>{
            console.log(res)
            ToastAndroid.show(
                "Check your email", 
                ToastAndroid.SHORT
            )
            AsyncStorage.SetOne("email", email)

            navigation.navigate("Verify")
        }).catch(e=>{
            console.log(e)
            ToastAndroid.show(
                "Error Occured, ", 
                ToastAndroid.SHORT
            )
        })
    }

    const Verify = async () =>{
        const mail : any = await AsyncStorage.GetOne("email")
        const ip : any = await AsyncStorage.GetOne("ip")
        axios.post(`http://${ip}:3000/users/reset`, {
            email : mail,
            code:code,
            password : password
        }).then((res)=>{
            console.log(res)
            ToastAndroid.show(
                "Done Changing, now go to login", 
                ToastAndroid.SHORT
            )

            navigation.navigate("Signin")
        }).catch(e=>{
            console.log(e)
            ToastAndroid.show(
                e.response.data, 
                ToastAndroid.SHORT
            )
        })
    }

    return {
        email, setEmail, password, setPass,code, setCode,
        Verify, 
        Request
    }
}

export default useRestore