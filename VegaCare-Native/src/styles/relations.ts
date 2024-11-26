import {StyleSheet , Dimensions} from 'react-native'
const {height} = Dimensions.get("screen")

const relationsStyle = StyleSheet.create({
    container :{
        width : "100%",
        height, 
        backgroundColor:"white"
    },

    addsuper:{
        width :"100%",
        height : "auto",
        display :"flex",
        alignItems:"center" , 
        justifyContent:"center"
        
    },
    title :{
        textAlign:"center",
        color:"#555",
        fontSize:25,
        fontWeight:"600",
        margin :20
    },

    addBtn : {
        width :"70%", 
        backgroundColor:"#3CBEF6", 
        display : "flex" , 
        alignItems:"center",
        justifyContent:"center" , 
        padding : 15,
        borderRadius:10, 
        //shadow 
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 0.5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        marginTop:20
    },

    superList : {
        width : "100%",
        height : "auto" , 
        backgroundColor:"white" , 
    },
    card : {
        width : "100%" , 
        height : 100,
        display :"flex" , 
        alignItems:"center" , 
        justifyContent:"space-between" ,
        backgroundColor:"#eee",
        flexDirection:"row",
        marginTop : 10,
        
        
    },
    avatar :{
        width : 70,
        height : 70,
        marginTop:-8
    },
    name : {
        fontSize:20,
        color:"#555",
        paddingLeft:20
    },
    statusButton : {}
   
})

export default relationsStyle