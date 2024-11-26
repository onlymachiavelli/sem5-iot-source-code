import * as React from 'react'
import * as Native from 'react-native'
import {Header} from './../components/'
import { profile } from '../styles'
import Lottie from 'lottie-react-native'
import Male from './../lottieFiles/Male.json'

import {InfoCard, Footer, SideMenu,Loading } from './../components'
import { LinearGradient } from 'expo-linear-gradient'
import Logo from './../lottieFiles/logo.json'
import Female from './../lottieFiles/Female.json'
import {AntDesign, Entypo,FontAwesome, Feather ,MaterialCommunityIcons ,FontAwesome5   } from '@expo/vector-icons'
import useGetMe from '../hooks/useGetme'

const Profile = ({navigation}:any) =>{
    const  {
        GetMe, 
        user, 
    } = useGetMe(navigation)

    React.useEffect(()=>{

        GetMe()

    }
    ,[])
    if (user){
        console.log(user)
    }
    const animationRef = React.useRef(null)
    const [menu, setMenu] = React.useState("none")
    
    return !user ? (<Loading Open={true}/>) : (
        <Native.View style={profile.container}>
                
            <LinearGradient
            style={profile.cov}
        colors={['#87CEEB', '#1E90FF']}

        start={{ x: 0, y: 0 }}
      >
      
        <Native.View style={profile.proInfo}>
            <Native.View style={profile.profileBorder}>
                <Lottie
                    
                    source={user ? (user.user.gender === "female" ? Female : Male) : Male}
                    loop
                    autoPlay
                    style={{
                        width:110,
                        height:110
                        ,}}
                    ref={animationRef}

                    />
            </Native.View>

            <Native.View>
                <Native.Text style={profile.name}>
                    {
                        user ? user.user.fullname : "Loading..."
                    }
                </Native.Text>

                <Native.Text style={profile.id}>
                <AntDesign name="user" size={10} color="white" /> ID:@{
                        user ? user.user.id : "Loading..."
                }
                </Native.Text>
                <Native.Text style={profile.data}>
                    <AntDesign name="enviroment" size={13} color="white" /> {
                        user ? user.user.address : "Loading..."
                    }
                </Native.Text>

                <Native.Text style={profile.data}>
                    <FontAwesome name="phone" size={15} color="white" /> {
                        user ? user.user.phone : "Loading..."
                    }
                </Native.Text>

                <Native.Text style={profile.data}>
                    
                    <Native.View style={{
                        width : 10, 
                        height : 10,
                        borderRadius:100, 
                        backgroundColor:"#B5170D",
                        
                    }}>
                        
                    </Native.View>

                     {"  "} Device is Disconnected
                </Native.Text>
            </Native.View>


            <Native.View></Native.View>
            <Native.View></Native.View>
            <Native.View></Native.View>
            <Native.View style={{
                alignContent:"flex-end",
                justifyContent:"flex-end",
                zIndex:100

            }}>
                <Native.TouchableOpacity

                    onPress={()=>{
                        setMenu(menu === "flex" ? "none" : "flex")
                    }
                }
                    style={{
                        position:"absolute",
                        right:0,
                        top:-50
                    }}
                >
                    
                    <Entypo  name="menu" size={30} color="white" />    
                </Native.TouchableOpacity>
            </Native.View>
        </Native.View>

        <Native.TouchableOpacity style={profile.editButton}>
            <Native.Text style={profile.editText}>
            <Feather name="edit" size={16} color="white" /> Edit Profile
            </Native.Text>
        </Native.TouchableOpacity>


        <Native.View
            style={profile.numberBlock}
        >

            <Native.TouchableOpacity style={profile.buttonData}>
                <Native.View>
                <MaterialCommunityIcons name="google-circles-communities" size={50} color="white" />
                </Native.View>
            
            <Native.Text style={profile.buttonDataText}>
                180
            </Native.Text>

            <Native.Text style={profile.buttonDataText}>
                SUPERVISORS
            </Native.Text>
            </Native.TouchableOpacity>

            <Native.TouchableOpacity style={profile.buttonData}>
                <Native.View>
                <FontAwesome5 name="heartbeat" size={50} color="white" />
            </Native.View>
            
            <Native.Text style={profile.buttonDataText}>
                78%
            </Native.Text>

            <Native.Text style={profile.buttonDataText}>
                HEALTH : STABLE
            </Native.Text>
            </Native.TouchableOpacity>

        </Native.View>
      </LinearGradient>

      
      <Native.Text style={{
        fontSize:20,
        textAlign:"center",
        padding:20
      }}>
        It's quite for now.
      </Native.Text>
      <Native.View style={{alignSelf:"center"}}>
        <Lottie
            source={Logo}
            loop
            autoPlay
            style={{
                width:200,
                height:200,}}
                ref={animationRef}
        />
      </Native.View>
      <Footer
                ToChat={()=>{

                    navigation.navigate("Chat")
                }}

                ToDevice={
                    ()=>{
                    
                        navigation.navigate("Scanner")
                    }
                }

                ToRelations={()=>{
                    navigation.navigate("Relations")
                }}

                ToHome={
                    ()=>{
                        navigation.navigate("Dashboard")
                    }
                }
                
               />

            <SideMenu
                Display={menu}  
                Hide={setMenu}
                OnLogOut={
                    ()=>{
                        navigation.navigate("Signin")
                    }
                }
                ToMedical={()=>{
                    navigation.navigate("ConsultMedical")
                }}

                ToRelation={()=>{
                    navigation.navigate("Relations")
                }}

                ToLocation={()=>{
                    navigation.navigate("Location")
                }}
                />
            
        </Native.View>
    )
}

export default Profile