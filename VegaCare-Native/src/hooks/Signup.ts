
import * as React from 'react'
import axios from 'axios'
import * as AsyncStorage from './AsyncStorage'
import { ToastAndroid } from 'react-native'
import { Happy } from '../screens'
const useSignUp = (navigation : any) =>{

    const [fullname , setFname] = React.useState("")
    const [email , setEmail] = React.useState("")
    const [phone , setPhone] = React.useState("")
    const [gender, setGender] = React.useState("")
    const [address, setAddress] = React.useState("")
    const [bday, setBday] = React.useState("")
    const [type, setType] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [pass, setPass] = React.useState("")
    const [day, setDay] = React.useState('1')
    const [month, setMonth] = React.useState('1')
    const [year, setYear] = React.useState('1950')



    const MakeLogin = async () =>{


        //get the day as postgres type date for the birthday 
        setMonth(Number(month) < 9 ? "0"+month : month)
        setDay(Number(day) < 9 ? "0"+day : day)
        const bd:any = `${year}-${month}-${day}`
        const bday = new Date(Number(year), Number(month) - 1, Number(day)).toISOString().split('T')[0];

        const body : any ={
            fullname : fullname, 
            email : email,
            phone : phone,
            gender : gender,
            address : address, 
            bday : bday,
            type : type,
            password : password
        }
        //add a code to check the content of the data 

        const ip : any = await AsyncStorage.GetOne("ip")
        console.log(ip)
        axios.post(`http://${ip}:3000/users` , body).then((res)=>{
            console.log(res)
            if (res.status == 200) {
                AsyncStorage.SetOne("token" , res.data.token)
                

                ToastAndroid.show(
                    "Account is created ! Heading to complete your account" , 
                    ToastAndroid.SHORT
                )
                    const Target :any = Happy
                    //navigate to profile 
                    navigation.navigate(Target)
                    


            }
            else {
                ToastAndroid.show(
                    res.data, 
                    ToastAndroid.SHORT
                )            }
            
            return res.data
        })
        .catch((e:any)=>{
            console.log((e))
            ToastAndroid.show(
                e.response.data , 
                ToastAndroid.SHORT
            )             
            return e.response 
        })
    }   

    

    return {
        MakeLogin,
        fullname,email,phone, gender , address , bday , type,  password, 
        
        setFname, 
        setEmail,
        setPhone,
        setGender,
        setAddress,
        setBday,
        setType,
        setPassword,
        


        day, year, month, 
        setDay, setYear, setMonth,

        pass, setPass
    }
}

export default useSignUp