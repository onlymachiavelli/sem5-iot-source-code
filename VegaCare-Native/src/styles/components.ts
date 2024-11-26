import { StyleSheet , Dimensions} from "react-native"
const {height} = Dimensions.get("window")



const components = StyleSheet.create({
    //inputs 
    InputContainer: {
        width: "90%",
        display :"flex" , 
        alignItems:"center",
        justifyContent:"center",
        padding: 10,
        margin:5,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 0.5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        // Android elevation
        elevation: 6,
        alignSelf:"center",
        borderWidth:0.5, 
        borderColor:"#555",
        borderRadius:5
      },
      Input :{
        fontSize:15,
        width:"90%",
      }
      , SInputContainer: {
        width: "28%",
        display :"flex" , 
        alignItems:"center",
        justifyContent:"center",
        padding: 10,
        margin:5,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 0.5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        // Android elevation
        elevation: 6,
        alignSelf:"center",
        borderWidth:0.5, 
        borderColor:"#555",
        borderRadius:5
      },
      SInput :{
        fontSize:15,
        width:"90%",
      }
      
})


export default components