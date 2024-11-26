import { StyleSheet, Dimensions } from "react-native"
const {height} = Dimensions.get("screen")


const sidemenu = StyleSheet.create({
    container : {
        


        
    },
    txt:{
        color:"#fff",
        fontWeight:"bold" , 
        fontSize:17,
        
    },
    header:{
        width : "100%" ,
        display :"flex" , 
        alignItems:"center", 
        flexDirection:"row",
        padding:20,
        justifyContent:"space-between",paddingTop:55
    },
    menuHolder:{
        width : "100%",
    },
    button  :{
        width : "100%" ,
        display :"flex" ,
        alignItems:"center",
        flexDirection:"row",
        padding:10,
        marginTop:10

    }, buttonText:{
        color:"white",
        paddingLeft:10,
        
    }, 
    logOut:{
        width :200, 
        backgroundColor:"#F63C3C",
        padding:13, 
        alignItems:"center",
        borderRadius:100,
         borderWidth:0.5,
         borderColor:"#fff",
         display:"flex", 
         flexDirection:"row", 
         gap:10,
            justifyContent:"center",
            alignSelf:"center",
            bottom:120,
            position:"absolute",
        
    },
    logOutText:{

        color:"#fff" , 
        fontWeight:"bold",
        fontSize:14
    }
})

export default sidemenu