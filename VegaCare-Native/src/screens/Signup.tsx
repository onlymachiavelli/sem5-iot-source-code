import * as React from 'react'

import * as Native from 'react-native'
import {signup, components} from './../styles'
import Lottie from 'lottie-react-native'

import Lotti from './../lottieFiles/logo.json'
import { Header,Input, SmallInp } from './../components/index'
import {User} from './../components/svg'

import DropDownPicker from 'react-native-dropdown-picker'
import useSignUp from '../hooks/Signup'
import Aged from './../lottieFiles/Aged.json'
import Supervisor from './../lottieFiles/Supervisor.json'
import {useNavigation} from '@react-navigation/native'

const Signup = ({navigation}:any) =>{


    
    
    const animationRef = React.useRef<Lottie>(null)


    const [genders, setGenders] = React.useState([
        {
          label : 'Male' , value : 'male',
        }, 
        {
          label : 'Female' , value : 'female'
        }
  
    ])
    const [open, setOpen] = React.useState(false)
    //
    const {
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
      setDay, setYear, setMonth,pass, setPass,
  } = useSignUp(navigation)
    return !type?(

        <Native.ScrollView style={signup.container}>

            <Header/>


            <Native.Text style={
                signup.title
            }>
                Select your VegaCare Account Type
            </Native.Text>

           <Native.TouchableOpacity style={signup.BigButton}
            onPress={()=>{
                setType("patient")
                Native.ToastAndroid.show(
                    
                    "You are now a Patient",
                    Native.ToastAndroid.SHORT

                )
            }}
           >
                
                <Native.View style={{}}>
                <Lottie 
                    source={Aged}
                    autoPlay
                    loop
                    style={signup.logo}
                    ref={animationRef}
            />

                </Native.View>

            <Native.Text style={{

                color : "white",
                fontSize : 20,
                fontWeight : "bold",
                textAlign : "center",
                padding : 10,
                paddingBottom:30
            }}>
                Create VegaCare as a Patient
            </Native.Text>
           </Native.TouchableOpacity>


           <Native.TouchableOpacity style={signup.BigButton}
            onPress={()=>{
                setType("supervisor")
                Native.ToastAndroid.show(
                    
                    "You are now a Supervisor",
                    Native.ToastAndroid.SHORT

                )
            }}
           >
                
                <Native.View style={{}}>
                <Lottie 
                    source={
                        Supervisor
                    }
                    autoPlay
                    loop
                    style={signup.logo}
                    ref={animationRef}
            />

                </Native.View>

            <Native.Text style={{

                color : "white",
                fontSize : 20,
                fontWeight : "bold",
                textAlign : "center",
                padding : 10,
                paddingBottom:30
            }}>
                Create VegaCare as a SuperVisor
            </Native.Text>
           </Native.TouchableOpacity>

                    
        </Native.ScrollView>

    ): (
        <Native.ScrollView style={signup.container}>
            <Header/>

            


            <Native.Text style={
                signup.title
            }>
                Create a VegaCare Account
            </Native.Text>

            <Native.View>

            <Input Text={"Enter your Full name"} 
            
                Value={fullname}
                OnChange={
                    
                    (e:any)=>{
                        setFname(e)
                        console.log(fullname)
                    }
                }
            />
            <Input Text={"Enter your Email"}
                Value={email}
                OnChange={(e:any)=>{
                    setEmail(e)
                    console.log(email)
                }}

            />
            <Input Text={"Enter your Phone Number"}
                 Value={phone}
                 OnChange={(e:any)=>{
                    setPhone(e)  
                    console.log(phone)
                 }}
                 Number={true}
            />
            <Input Text={"Enter your Address"}
                Value={address}
                OnChange={(e:any)=>{
                    setAddress(e)
                    console.log(address)
                }
            }
            />


            
            
           <Native.View style={{display:"flex", flexDirection:"row",alignItems:"center", justifyContent:"center"}}>
            <SmallInp Text={"Day"} Number={true} Length={2}
                Value={day}
                OnChange={
                    (e:any)=>{
                        
                        setDay(e)
                        console.log(day)
                    }
                }
            />
            <SmallInp Text={"Month"} Number={true} Length={2} 
                Value={month}
                OnChange={(e:any)=>{
                    setMonth(e)
                    console.log(month)
                }}
            />
            <SmallInp Text={"Year"} Number={true} Length={4} 
                Value={year}
                OnChange={
                    (e:any)=>{

                        setYear(e)
                        console.log(year)
                    }

                }
            />

           </Native.View>

           <Native.View style={{ marginTop: 10, marginBottom: 10, width: "90%", alignSelf: "center", zIndex: 2 }}>
            <DropDownPicker
                open={open}
                value={gender}
                items={genders}
                placeholder='Select your gender'
                setOpen={setOpen}
                setValue={setGender}
                setItems={setGenders}
                style={{
                borderColor: "#555",
                borderWidth: 0.5,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 0.5,
                },
                shadowOpacity: 0.5,
                shadowRadius: 6,
                elevation: 6,
                borderRadius: 5,
                }}
            />
            </Native.View>



            <Input Text={"Enter your Password"}
            Secure={true}
                Value={password}
                OnChange={(e:any)=>{
                    setPassword(e)
                    console.log(password)
                }
            }
            />
           

                <Native.TouchableOpacity
                    style={signup.button}
                    onPress={()=>{
                        MakeLogin()
                    }}

                >

                    <Native.Text
                        style={signup.buttonText}
                    >
                        Create the Account
                    </Native.Text>  
                </Native.TouchableOpacity>
            </Native.View>


                        



                        <Native.TouchableOpacity style={signup.restore} onPress={()=>{
                            navigation.navigate("Signin")
                        }} >
                            <Native.Text style={{color:"#4C9FD5",fontWeight:"bold",textDecorationLine:"underline"}}>
                            Already have an Account ?
                            </Native.Text>
                        </Native.TouchableOpacity>

                    
        </Native.ScrollView>
    )
}

export default Signup