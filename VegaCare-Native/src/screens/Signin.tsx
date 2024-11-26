import * as React from 'react'

import * as Native from 'react-native'
import {signin} from './../styles'
import Lottie from 'lottie-react-native'

import Lotti from './../lottieFiles/logo.json'
import { Header,Input, Loading } from './../components/index'
import {User} from './../components/svg'
import useSignin from '../hooks/useSignin'
import { AsyncStorage } from '../hooks'
const SignIn = ({navigation} : any) =>{
    const [loader, setLoader] = React.useState(false)
    

    React.useEffect(()=>{

        AsyncStorage.GetOne("token").then(res=>{
            if (res) {
                navigation.navigate("Dashboard")
            }
        })
    },[])
    const {
        Login,
       email,  password, 
        
    
        setEmail,

        setPassword,
        result


       
    } = useSignin(navigation)
    const animationRef = React.useRef<Lottie>(null)
    return (
        <Native.ScrollView style={signin.container}>
            <Header/>

            <Native.View style={signin.logoContainer}>
                <Lottie 
                    source={Lotti}
                    autoPlay
                    loop
                    style={signin.logo}
                    ref={animationRef}
            />

            </Native.View>


            <Native.Text style={
                signin.title
            }>
                Log in to your Vega Account
            </Native.Text>

            <Native.View>

                <Input
                Text={"Enter your email"}
                Type={
                    "emailAddress"
                }
                Secure={false}
                Value={email}
                OnChange={setEmail}



                />


                <Input
                Text={"Enter your password"}
                Type={
                    "password"
                }
                Secure={true}
                
                Value={password}
                OnChange={setPassword}

                />


                <Native.TouchableOpacity
                    style={signin.button}
                    onPress={()=>{

                        //stay open for 1.5 sc 
                        setLoader(true)
                        setTimeout(()=>{setLoader(false)}, 3000)



                        Login()
                        
                        
                    }}

                >

                    <Native.Text
                        style={signin.buttonText}
                    >
                        Sign In
                    </Native.Text>  
                </Native.TouchableOpacity>
            </Native.View>


                        
            <Native.TouchableOpacity style={signin.restore} 
                onPress={()=>{setLoader(true)}}
            >
                            <Native.Text style={{color:"#555",textDecorationLine:"underline"}}
                            onPress={()=>{
                            
                                navigation.navigate("Restore")
                            }}
                            >
                            Forgot your Credentials ?
                            </Native.Text>
                        </Native.TouchableOpacity>


                        <Native.TouchableOpacity style={signin.restore} onPress={()=>{
                            navigation.navigate("Signup")
                        }} >
                            <Native.Text style={{color:"#4C9FD5",fontWeight:"bold",textDecorationLine:"underline"}}>
                            Create a new Account
                            </Native.Text>
                        </Native.TouchableOpacity>
                        <Loading
                            Open={
                                loader
                            }
                        />
                    
        </Native.ScrollView>
    )
}

export default SignIn