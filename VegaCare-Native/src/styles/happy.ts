

import { StyleSheet } from "react-native"
import { Dimensions } from "react-native"

const {height} = Dimensions.get("screen")


const happy = StyleSheet.create({
    container:{
        width :"100%" , 
        height,
        backgroundColor:"#004a9e",
        display : "flex", 
        flexDirection : "column",
        alignItems : "center",
        justifyContent : "center",
    },
    text:{
        color :"white",
        fontSize:25, 
        fontWeight:"bold",
        textAlign:"center",
    }
})



export default happy