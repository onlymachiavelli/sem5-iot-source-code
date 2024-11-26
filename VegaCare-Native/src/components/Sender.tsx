import * as React from 'react'

import * as Native from 'react-native'
import { chatStyle } from '../styles'

const Sender = ({...props}) =>{

    return (
        <Native.View style={chatStyle.senderContainer}>
            <Native.View style={chatStyle.chatContainer}>
                <Native.Text style={chatStyle.Text}>
               {
                props.message
               }
                </Native.Text>
            </Native.View>
        </Native.View>
    ) 
}


export default Sender