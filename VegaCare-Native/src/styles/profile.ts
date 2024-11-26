import { StyleSheet } from "react-native"


import {
    Dimensions
}
 from 'react-native'

 const {height} = Dimensions.get("screen")

 const profile = StyleSheet.create({
    container:{
        width : "100%",
        height , 
        backgroundColor:"white",
    },
    cov :{
        width : "100%" , 
        height : 400, 
        //shadow 
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 0.5,
        },
        shadowOpacity: 0.5,
        paddingTop:60,
        padding:10,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40
    }   ,
    proInfo:{
        width : "100%", 
        display :"flex" , 
        alignItems:"center", 
        justifyContent:"space-between",
        flexDirection:"row",
        gap :10

    },
    profileBorder:{
        width:90,
        height:90,
        borderRadius:100,
        display:"flex" , 
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"white"
    },
    name :{
        color:"white" , 
        fontWeight:"bold",
        fontSize:20
    },
    id:{
        color:"white" , 
        fontSize:10,
        padding:2
    },
    data : {
        color:"white" , 
        fontSize:14,
        padding:2
    },
    editButton:{
        width :"60%" , 
        padding:10,
        borderWidth:1 ,
        borderColor:"white" , 
        borderRadius:100 ,
        alignSelf:"center" , 
        display:"flex" , 
        alignItems:"center" , 
        justifyContent:"center",
        backgroundColor:"#ffffff33",
        marginTop:20
        
    },
    editText:{
        color :"white"
    },

    numberBlock:{
        width:"100%",
        display :"flex" , 
        alignContent:"center" , 
        justifyContent:"center",
        flexDirection:"row",
        marginTop:20
    },
    buttonData:{
        width:"40%",
        display :"flex" , 
        alignItems :"center" , 
        justifyContent:"center", 
        flexDirection:"column",
        marginTop:20

    },
    buttonDataText:{
        color:"white",
        fontWeight:"bold",
        fontSize:17
    }
    

 })

 export default profile