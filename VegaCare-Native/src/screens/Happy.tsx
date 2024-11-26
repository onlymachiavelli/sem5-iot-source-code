import * as Native from 'react-native'
import { happy } from '../styles'
import Lottie from 'lottie-react-native'
import * as React from 'react'
import HappyJson from './../lottieFiles/Happy.json'
const Happy = ({navigation}:any) =>{
    //go to dashboard after 3 seconds 
    React.useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Profile')
        },3000)
    },[])
    //create ref 
    const animationRef = React.useRef(null)     
    return (
        <Native.View style={happy.container}>
                <Lottie
                
                source={HappyJson}
                autoPlay
                ref={animationRef}
                loop
                style={{
                    width:300,
                    height:300
                }}

            />

            <Native.Text style={happy.text} >
                Welcome Bro ! You won't regret VegaCare
            </Native.Text>
        </Native.View>
    )
}   

export default Happy