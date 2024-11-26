import { StyleSheet , Dimensions} from "react-native"
const {height} = Dimensions.get("screen")



const signup = StyleSheet.create({
    container :{
        width : "100%", 
        height , 
        backgroundColor:"white",

    },
    logo :{
        width:200, 
        height:200
    } , 
    logoContainer: {
        width:"100%" ,
        display :"flex", 
        
        justifyContent:"center",
        alignItems:"center",
        paddingTop:40
    },
    title:{
        padding:30,
        fontWeight:"600",
        color:"#555",
        fontSize:20,
    },
    button :{
        textAlign:"center",
        width:"60%" , 
        backgroundColor:"#4C9FD5",
        padding:15,
        alignItems:"center",
        alignSelf:"center",
        marginTop : 20,

        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 0.5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        // Android elevation
        elevation: 6,
        borderRadius:5
    },
    buttonText : {
        color:"white",
    },
    restore:{
        alignSelf:"center", 
        margin : 20
    },
    BigButton:{
        width : "90%" , 
        height : "auto", 
        backgroundColor : "#4C9FD5",
        shadowColor: "#000",
        shadowOffset: {
        width: 4,
        height: 4,
        },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        // Android elevation
        elevation: 6,
        borderRadius:5,
        display : "flex",
        flexDirection : "column",
        alignItems : "center",
        justifyContent : "center",
        alignSelf:"center",
        marginTop:20
    }
})


export default signup