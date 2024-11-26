import * as React from 'react'
import { View, Text, ScrollView, Dimensions } from 'react-native' // Import ScrollView from 'react-native'
import * as Native from 'react-native'
import { ProfileHeader, Footer, SideMenu } from '../components'
import { useGetMe } from '../hooks'
import Graph from '../components/Graph'
import {FontAwesome5,AntDesign} from '@expo/vector-icons'
const { height } = Dimensions.get("screen")

const Heart = ({ navigation }: any) => {
  const { GetMe, user } = useGetMe(navigation);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    GetMe()
  }, [])

  return (
    <View style={{ width: "100%", maxHeight:height,height:height, backgroundColor: "white" }}>
      <ProfileHeader
        Display={setOpen}
        Status={open}
        ToProfile={() => {
          navigation.navigate('Profile');
        }}
        Name={user ? user.user.fullname : 'Loading'}
        Gender={user ? user.user.gender : 'Loading'}
      />


<Native.View style={{
        width : "90%" , 
        height : 180 ,
        alignSelf:"center",
        display : "flex" , 
        alignItems:"center" , 
        justifyContent:"center" , 
        flexDirection:"column" ,
        borderWidth:1,
        borderColor:"#eee",
        backgroundColor:"#F63C3C", 
        paddingRight:10,
        
      
        
        borderRadius:5,
        marginTop:10
    }}>
      <AntDesign name="heart" size={50} color="white" />
      <Text style={{
        color:"white" , 
        fontSize:25
      }}>60BMP</Text>

    </Native.View>


<Native.View style={{
        width : "90%" , 
        height : 180 ,
        alignSelf:"center",
        display : "flex" , 
        alignItems:"flex-start" , 
        justifyContent:"center" , 
        flexDirection:"column" ,
        borderWidth:1,
        borderColor:"#eee",
        backgroundColor:"white", 
        paddingRight:10,
        

        
        borderRadius:5,
        marginTop:10
    }}>
        
        <Native.Text style={{
        width: "100%",
        textAlign: "center",
        paddingLeft: 20,
        color: "#F63C3C",
        paddingTop: 50
        }}>
        <AntDesign name="heart" size={15} color="#F63C3C" /> My Blood Pressure: 60BMP
        </Native.Text>

        <Graph
        GRID={true}
        DECIMAL={true}
            Color={"#F63C3C"}

            Labels={[
                "2023-07-29T10:00:00.000Z",
                "2023-07-29T10:05:00.000Z",
                "2023-07-29T10:10:00.000Z",
                "2023-07-29T10:15:00.000Z",
                "2023-07-29T10:20:00.000Z",
                "2023-07-29T10:25:00.000Z",
                "2023-07-29T10:30:00.000Z",
                "2023-07-29T10:35:00.000Z",
                "2023-07-29T10:40:00.000Z",
                "2023-07-29T10:45:00.000Z",
              ]
                }
              DIS={false}
              DATA={[75, 80, 78, 85, 90, 88, 82, 79, 83, 76]}
              HOR={true}
              VER={true}
        />
    </Native.View>
   
      <SideMenu Hide={setOpen} Display={open} />
    </View>
  )
}

export default Heart