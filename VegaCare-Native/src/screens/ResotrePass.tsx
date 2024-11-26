import * as React from 'react'

import * as Native from 'react-native'
import {signin} from './../styles'
import Lottie from 'lottie-react-native'

import Lotti from './../lottieFiles/logo.json'
import { Header,Input, Loading } from './../components/index'
import { AsyncStorage } from '../hooks'
import {useRestore} from './../hooks/'
const Restore = ({navigation} : any) =>{
    const [loader, setLoader] = React.useState(false)
    
    const {
        email, setEmail, password, setPass,
        Verify, 
        Request
    }= useRestore(navigation)
    React.useEffect(()=>{

        AsyncStorage.GetOne("token").then(res=>{
            if (res) {
                navigation.navigate("Profile")
            }
        })
    },[])
    
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
                Enter your Email to restore your Account
            </Native.Text>

            <Native.View>




                <Input
                Text={"Enter your Email"}
                Type={
                    "text"
                }
                Secure={false}
                
                Value={email}
                OnChange={setEmail}

                />


                <Native.TouchableOpacity
                    style={signin.button}
                    onPress={()=>{

                        //stay open for 1.5 sc 
                        setLoader(true)
                        setTimeout(()=>{setLoader(false)}, 3000)
                        

                        Request()


                        
                        
                    }}

                >

                    <Native.Text
                        style={signin.buttonText}
                    >
                        Send Email
                    </Native.Text>  
                </Native.TouchableOpacity>
            </Native.View>


                        
           


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

export default Restore