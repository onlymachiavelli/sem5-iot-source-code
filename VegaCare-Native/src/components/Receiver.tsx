import * as React from 'react'

import * as Native from 'react-native'
import { chatStyle } from '../styles'

const Receiver = ({...props}) =>{

    return (
        <Native.View style={chatStyle.receiverContainer}>
            <Native.View style={chatStyle.recChat}>
                <Native.Text style={chatStyle.recTxt}>
                    {
                        props.message
                    }
                </Native.Text>
            </Native.View>
        </Native.View>
    )
}


export default Receiver 