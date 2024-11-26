import * as React from 'react'

import * as Native from 'react-native'
import {} from './../screens'
import { LinearGradient } from 'expo-linear-gradient'
import {footer} from '../styles'
import { FontAwesome, AntDesign, FontAwesome5 ,Ionicons   } from '@expo/vector-icons'
const Footer = ({...props}) =>{

    
    return (
        <LinearGradient
        style={footer.container}
        // Background Linear Gradient
        colors={['#87CEEB', '#1E90FF']}

        //degree 45degree 
        start={{ x: 0, y: 0 }}
    >


        <Native.TouchableOpacity 
            onPress={()=>{
                props.ToHome()
            }}
        >
            <Native.Text>
            <FontAwesome name="home" size={28} color="white" />

            </Native.Text>
        </Native.TouchableOpacity>
        

        <Native.TouchableOpacity onPress={()=>{
            props.ToChat()
        }}>
            <Native.Text>
                <AntDesign name="wechat" size={28} color="white" />
            </Native.Text>
        </Native.TouchableOpacity>

        <Native.TouchableOpacity
            style={
                footer.device
            }

            onPress={()=>{
            
                props.ToDevice()
            }}
        >
            <Native.Text>
                <FontAwesome5 name="socks" size={28} color="white" />
            </Native.Text>
        </Native.TouchableOpacity>

        <Native.TouchableOpacity
            onPress={()=>{
                props.ToRelations()
            }}
        >
             <Native.Text>
                <Ionicons name="people" size={28} color="white" />
             </Native.Text>
        </Native.TouchableOpacity>


        <Native.TouchableOpacity>
             <Native.Text>
                 <Ionicons name="notifications" size={28} color="white" />
            </Native.Text>
        </Native.TouchableOpacity>
  </LinearGradient>
    )
}

export default Footer