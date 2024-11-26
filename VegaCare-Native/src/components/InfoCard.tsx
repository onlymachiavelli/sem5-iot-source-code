

import * as React from 'react'

import * as Native from 'react-native'


const InfoCard = ({...props}) =>{

    return (
        <Native.View style={{
            width: "70%",
            padding: 10,
            alignSelf: "center",
            borderWidth: 1,
            borderColor: "#555",
            borderRadius: 5,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#f9f9f9",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            gap:5
          }}>
            <Native.Text style={{ fontWeight: "bold", fontSize: 16 }}>
              {props.Title}
            </Native.Text>
          
            <Native.Text style={{ fontSize: 16 }}>
              {props.Data}
            </Native.Text>
          </Native.View>
          
    )
}

export default InfoCard
