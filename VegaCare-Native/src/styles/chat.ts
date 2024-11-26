import {Dimensions, StyleSheet} from 'react-native'


const {height} = Dimensions.get("window")

const chatStyle= StyleSheet.create({
    container:{
        width : "100%" , 
        height ,
        backgroundColor:"white",
        display : "flex" , 
    },
    senderContainer:{
        width:"100%" ,
        height : "auto" , 
        display :"flex" , 
        alignItems:"flex-end",
        justifyContent:"center", 
        padding : 10


    }, 
    receiverContainer:{
        width:"100%" ,
        height : "auto" , 
        display :"flex" , 
        alignItems:"flex-start",
        justifyContent:"center", 
        padding : 10


    }, 
    
    Text:{
        padding : 10
    }, 


    chatContainer:{
        maxWidth:"70%" , 
        height :"auto" , 
        backgroundColor:"#eee",
        borderRadius:100,
        display : "flex" , 
        alignItems:"center" , 
        justifyContent:"center",
        padding : 10
    }, 


    message : {
        width : "100%",
        height : "auto" , 
        display : "flex" , 
        alignItems:"center" ,
        justifyContent:"center",
        flexDirection:"row"
        
    }, 
    input:{
        width :"70%" , 
        padding : 10,
        paddingLeft:20, 
        borderRadius : 100 ,

        display :"flex" , 
        alignItems:"center",
        justifyContent:"center",
        margin:5,
        backgroundColor: "#fff",
        
        
    },
    sendbtn:{
        width:45,
        height:45,
        borderRadius:100,       
        display :"flex" ,
        alignItems:"center",
        justifyContent:"center" , 
        backgroundColor:"#1E90FF",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 0.5,
        
        },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        
    },
    recChat :{
        maxWidth:"70%" , 
        height :"auto" , 
        backgroundColor:"#3c71bb",
        borderRadius:100,
        display : "flex" , 
        alignItems:"center" , 
        justifyContent:"center",
        padding : 10
    }
    ,
    recTxt :{
            padding : 10,
            color:"#fff"
    }

    ,
    block : {
        width : "90%",
        padding : 5, 
        alignSelf:"center",
        display :"flex" , 
        alignItems:"center", 
        justifyContent:"center",
        borderWidth : 0.5,
        borderColor:"#555",
        borderRadius:100,
        //shadow 
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 0.5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        flexDirection:"row",
        marginTop:20



    },
    inp:{
        width : "85%",
        paddingLeft:5,
        
    }
})

export default chatStyle