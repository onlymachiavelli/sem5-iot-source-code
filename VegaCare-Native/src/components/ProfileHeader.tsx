import * as React from 'react'


import * as Native from 'react-native'
import { profile, profileHeader } from './../styles/'
import Lottie from 'lottie-react-native'
import Man from './../lottieFiles/Male.json'
import Female from './../lottieFiles/Female.json'
import { Entypo } from '@expo/vector-icons'
const ProfileHeader = ({...props} ) =>{
    //create animation ref 
    const animationRef = React.useRef(null)
    return (
        <Native.View style={profileHeader.container}>
            <Native.View style={profileHeader.profileHolder}>
                <Native.TouchableOpacity onPress={()=>{
                    props.ToProfile()
                }}>
                    <Lottie
                        style={profileHeader.profilePic}
                        source={props.Gender ? (props.Gender ==="male" ? Man : Female) : Female} 
                        ref={animationRef}
                        loop 
                        autoPlay 



                    />
                </Native.TouchableOpacity>
            </Native.View>
            <Native.View>
                <Native.TouchableOpacity onPress={()=>{
                    props.ToProfile()
                }}>
                <Native.Text style={profileHeader.nameTxt}>
                    {
                        props.Name ? props.Name :"Loading Name"
                    }
                </Native.Text>
                </Native.TouchableOpacity>
            </Native.View>

            <Native.View style={profileHeader.burger}>
                <Native.TouchableOpacity
                    onPress={()=>{
                        props.Display(props.Status === "flex" ? "none" :"flex")
                    }
                }
                >
                    <Entypo name="menu" size={30} color="#555" />
                </Native.TouchableOpacity>
            </Native.View>

        </Native.View>
    )
}


export default ProfileHeader