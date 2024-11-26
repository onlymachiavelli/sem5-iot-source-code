import * as Native from 'react-native'
import * as React from 'react'
import Lotti from 'lottie-react-native'
import Load from './../lottieFiles/Loading.json'

const {height} = Native.Dimensions.get("screen")


const Loading = ({...props}) =>{

    //create a ref 
    const animationRef = React.useRef(null)
    return (
        <Native.View style={{
            width : "100%" , 
        height, 
        backgroundColor:"white" , 
        position:"absolute", 
        top :0,
        left : 0, 
        display : props.Open ? "flex" : "none" , 
        alignItems:"center" , 
        justifyContent:"center"
        
        }}>
                <Lotti
                
                source={Load}
                loop
                autoPlay
                style={{
                    width:200,
                    height:200,}}
                    ref={animationRef}

                />
        </Native.View>
    )
}

export default Loading