import * as React from 'react'

import * as Native from 'react-native'
import {signin} from './../styles'
import Lottie from 'lottie-react-native'

import Lotti from './../lottieFiles/logo.json'
import { Header,Input, Loading } from './../components/index'
import { AsyncStorage } from '../hooks'
import {useRestore} from './../hooks/'
const Verify = ({navigation} : any) =>{

    const {
        email, setEmail, password, setPass,code, setCode,
        Verify, 
        Request
    } = useRestore(navigation)
    const [loader, setLoader] = React.useState(false)
    

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
                Enter the code from your Email
            </Native.Text>

            <Native.View>




            <Input
                Text={"Enter your Code"}
                Type={
                    "text"
                }
                Secure={false}
                
                Value={code}
                OnChange={setCode}

                />

<Input
                Text={"Enter your new Password"}
                Type={
                    "password"
                }
                Secure={false}
                
                Value={password}
                OnChange={setPass}

                />


                <Native.TouchableOpacity
                    style={signin.button}
                    onPress={()=>{

                        //stay open for 1.5 sc 
                        setLoader(true)
                        setTimeout(()=>{setLoader(false)}, 3000)


                        Verify()

                    }}

                >

                    <Native.Text
                        style={signin.buttonText}
                    >
                        Change Password
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

export default Verify