import * as React from 'react'
import * as Native from 'react-native'
import { medicalinfo } from '../styles'
import {ProfileHeader, SideMenu, Input, SearchBox, Footer} from './../components'
import useGetMe from '../hooks/useGetme'
import DropDownPicker from 'react-native-dropdown-picker'
import { FontAwesome5 } from '@expo/vector-icons'
import { useGetData, useMedical,useConsult } from '../hooks'


const ConsultMedical = ({navigation}:any) =>{


    const {
        
    } = useGetData()
    const  {
        weight, height, glucose, blood,

        GetData
        ,


        conditions, allergies, medications
    } = useConsult(navigation)
    
    const [open, setOpen] = React.useState("none")
    const {user, GetMe} = useGetMe(navigation)
    React.useEffect(()=>{
        GetMe()

        GetData()

        

       
    },[])



    const [bloods, setBloods] = React.useState( [
        
  
        {
          label: "A",
          value: "A",
        },
        {
          label: "B",
          value: "B",
        },
        {
          label: "AB",
          value: "AB",
        },
        {
          label: "O",
          value: "O",
        },
        {
          label: "A+",
          value: "A+",
        },
        {
          label: "A-",
          value: "A-",
        },
        {
          label: "B+",
          value: "B+",
        },
        {
          label: "B-",
          value: "B-",
        },
      ])

      const [op, setOp] = React.useState(false) 


      
      
    return (
        <Native.View style={medicalinfo.container}>
            <ProfileHeader

                Display={setOpen}
                Status={open}
                ToProfile={()=>{
                    navigation.navigate("Profile")
                }}
                Name={user ? user.user.fullname : "Loading"}
                Gender={user ? user.user.gender : "Loading"}
                

            />
            <Native.ScrollView style={{
                maxHeight:"78%",
                width:"100%"
            }}>
    <Native.View>


        <Input
            Text="Weight"
            Number={true}
            Value={weight}
            //OnChange={setWeight}

            //read only 
            ReadOnly={true}

        />

        <Input
            Text="Height"
            Number={true}
            Value={height}
            //OnChange={setHeight}


        />

        <Input
            Text="Glucose Level"
            Number={true}

            Value={glucose}
            //OnChange={setGlucose}
        />


        <Input
            Text="Blood Type"
            Number={true}
            Value={blood}
            //Value={glucose}
            //OnChange={setGlucose}
        />

        
            </Native.View>
            

            
            {
                //allergies
            }

            <Native.Text style={{
                color:"#555" , 
                 alignSelf:"center",
                 fontSize:25, 
                 padding : 10,
                 paddingTop:30
            }}>
                Your Allergies
            </Native.Text>
               
               <Native.View style={{
                width : "90%",
                height:"auto" ,
                alignSelf:"center",
                marginTop:20,
                marginBottom:20,
                display : "flex" , 
                alignItems:"center" , 
                justifyContent:"center",
                flexDirection:"row" ,
                gap:10,
                //max 3 elements 
                flexWrap:"wrap"
               }}>
               {
                allergies.map((data: any, index: any) =>{
                    return (
                        <Native.TouchableOpacity
                       
                        key={index}

                        style={{
                        
                            width:"auto",
                            height:"auto" , 
                            paddingRight:20,
                            paddingLeft:20,
                            padding:10,
                            backgroundColor:"#1E90FF",
                            borderRadius:5,
                            
                            
                        }}
                        >

                            <Native.Text style={{color:"#fff"}}>
                                {data ? data.title :"loading..."}
                            </Native.Text>
                        </Native.TouchableOpacity>
                    )
                })
               }
               </Native.View>

               {
               //medications
             }


        <Native.Text style={{
                color:"#555" , 
                 alignSelf:"center",
                 fontSize:25, 
                 padding : 10,
                 paddingTop:30
            }}>
                Select Medications you take
            </Native.Text>
        <Native.View style={{
                        width : "90%",
                        height:"auto" ,
                        alignSelf:"center",
                        marginTop:20,
                        marginBottom:20,
                        display : "flex" , 
                        alignItems:"center" , 
                        justifyContent:"center",
                        flexDirection:"row" ,
                        gap:10,
                        //max 3 elements 
                        flexWrap:"wrap"
                    }}>
               {
                medications.map((data: any, index: any) =>{
                    return (
                        <Native.TouchableOpacity
                       
                        key={index}

                        style={{
                        
                            width:"auto",
                            height:"auto" , 
                            paddingRight:20,
                            paddingLeft:20,
                            padding:10,
                            backgroundColor:"#1E90FF",
                            borderRadius:5,
                            
                            
                        }}
                        >

                            <Native.Text style={{color:"#fff"}}>
                            {data ? data.title :"loading..."}
                            </Native.Text>
                        </Native.TouchableOpacity>
                    )
                })
               }
               </Native.View>



               <Native.Text style={{
                color:"#555" , 
                 alignSelf:"center",
                 fontSize:25, 
                 padding : 10,
                 paddingTop:30
            }}>
                Select Conditions you have
            </Native.Text>
        <Native.View style={{
                width : "90%",
                height:"auto" ,
                alignSelf:"center",
                marginTop:20,
                marginBottom:20,
                display : "flex" , 
                alignItems:"center" , 
                justifyContent:"center",
                flexDirection:"row" ,
                gap:10,
                //max 3 elements 
                flexWrap:"wrap"
               }}>
               {
                conditions.map((data: any, index: any) =>{
                    return (
                        <Native.TouchableOpacity
                       
                        key={index}

                        style={{
                        
                            width:"auto",
                            height:"auto" , 
                            paddingRight:20,
                            paddingLeft:20,
                            padding:10,
                            backgroundColor:"#1E90FF",
                            borderRadius:5,
                            
                            
                        }}
                        >

                            <Native.Text style={{color:"#fff",}}>
                            {data ? data.title :"loading..."}
                            </Native.Text>
                        </Native.TouchableOpacity>
                    )
                })
               }
               </Native.View>
               <Native.TouchableOpacity  onPress={()=>{
                navigation.navigate("MedicalInfo")
                //Update()
               }} style ={{width :"60%" , padding:15, backgroundColor:"white" ,  alignSelf:"center", margin:10, display : "flex" , alignContent:"center" , justifyContent:"center",
                //shadow 
                shadowColor: '#000',
                shadowOffset: {
                width: 2, // Set a positive value for a shadow on the right side
                height: 0,
                },
                shadowOpacity: 0.5,
                shadowRadius: 6,
                elevation: 6, // Add elevation for Android
                borderWidth:0.5,    
                borderColor:"#1E90FF",
                borderRadius:100                        
            
            }}
            
            >
                    <Native.Text style={{color:"#1E90FF", textAlign:"center"}}>
                        Update your Data
                    </Native.Text>
               </Native.TouchableOpacity>
            </Native.ScrollView>
            <SideMenu
            
               Hide={
                     setOpen
               }
               Display={open}
            />
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
        </Native.View>  
    )
}


export default ConsultMedical