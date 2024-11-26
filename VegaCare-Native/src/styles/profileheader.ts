import { Dimensions, StyleSheet } from "react-native"



const profileHeader = StyleSheet.create({
    container :{
        width : "100%" , 
        height : "auto",
        paddingTop:40,
        padding:10,
        paddingLeft:15,
        display :"flex",
        alignItems:"center",
    justifyContent:"space-between",
    flexDirection:"row"
    }, 
    profilePic:{
        width:50,
        height:50
    }, 

    nameBlock :{

    }, 
    nameTxt:{
        fontSize:17,
        fontWeight:"bold",
        color:"#555"
    }, 
    burger:{
        width:"50%",
        display:"flex" ,
        alignItems:"flex-end",
        zIndex:1
    },
    profileHolder :{
        width:50,
        height:50,
        backgroundColor:"#6BB1C8" , 
        display :"flex" , 
        alignItems:"center",
        justifyContent:"center",
        borderRadius:100,
        marginRight:10,
        //SHADOW 
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.30,
        shadowRadius: 3.84,
        elevation: 7,

    }
})


export default profileHeader