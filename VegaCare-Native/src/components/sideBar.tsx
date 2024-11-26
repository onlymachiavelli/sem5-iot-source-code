import * as React from 'react';
import { View, Text, TouchableOpacity, Dimensions ,ToastAndroid} from 'react-native';
import { sidemenu } from './../styles';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
const {height} = Dimensions.get("screen")
import { AsyncStorage } from '../hooks'
import {MedicalInfo} from './../screens'


const SideMenu = ({ ...props }) => {
  return (
    <View style={{
        width : "80%" ,
        position : "absolute" ,
        left:0,
        height,
        top:0,
        backgroundColor:"#171B24",
        zIndex:100,
        borderBottomRightRadius : 10,
        borderTopRightRadius : 30,

        paddingLeft:10,
        //shadow 

        shadowColor: '#000',
    shadowOffset: {
      width: 2, // Set a positive value for a shadow on the right side
      height: 0,

    
    },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    // On Android
    elevation: 6,
    display:props.Display ? props.Display : "none"
    }}>
      <View style={sidemenu.header}>
        <Text style={sidemenu.txt}>VegaCare Menu</Text>
        <TouchableOpacity
            onPress={() => {
                props.Hide("none")
            }}
            >
          <AntDesign name="closecircle" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={sidemenu.menuHolder}>
        <TouchableOpacity style={sidemenu.button}>
        <FontAwesome name="home" size={25} color="white" />
          <Text style={sidemenu.buttonText}>
             {"     "}Home: Health Data
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={sidemenu.button} onPress={()=>{
          props.Hide("none")
          props.ToMedical()
        }}>
        <FontAwesome name="medkit" size={25} color="white" />
          <Text style={sidemenu.buttonText}>
             {"     "}Medical Information
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={sidemenu.button}onPress={()=>{
          props.Hide("none")
          props.ToRelation()
        }}>
            
                <FontAwesome name="id-card" size={25} color="white" />
             
          <Text style={sidemenu.buttonText}>
          {"     "}Add emergency contact
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={sidemenu.button}onPress={()=>{
          props.Hide("none")
          props.ToLocation()
        }}>
            
                <FontAwesome name="map" size={25} color="white" />
             
          <Text style={sidemenu.buttonText}>
          {"     "}Location
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={sidemenu.button}>
        <FontAwesome name="file-text" size={25} color="white" />
          <Text style={sidemenu.buttonText}>
            {"     "} Report Something
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={sidemenu.button}>
            <FontAwesome name="phone" size={25} color="white" /> 
          <Text style={sidemenu.buttonText}>{"     "}Contact Us
          </Text>
        </TouchableOpacity>


        <TouchableOpacity style={sidemenu.button} >
            
                <FontAwesome name="info-circle" size={25} color="white" />
             
          <Text style={sidemenu.buttonText}>
          {"     "}About VegaTeam
          </Text>
        </TouchableOpacity>



      </View>
        <TouchableOpacity style={sidemenu.logOut} onPress={()=>{
            AsyncStorage.SetOne("token", "")
            props.Hide("none")
            ToastAndroid.show("LogOut Successfully", ToastAndroid.SHORT)
            props.OnLogOut()
        }}>
        <AntDesign name="logout" size={24} color="white" />

            <Text
                style={sidemenu.logOutText}
            >
                LogOut
            </Text>
            </TouchableOpacity>
    </View>
  );
};

export default SideMenu;
