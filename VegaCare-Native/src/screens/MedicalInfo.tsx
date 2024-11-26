import * as React from 'react'
import * as Native from 'react-native'
import { medicalinfo } from '../styles'
import {ProfileHeader, SideMenu, Input, SearchBox, Footer} from './../components'
import useGetMe from '../hooks/useGetme'
import DropDownPicker from 'react-native-dropdown-picker'
import { FontAwesome5 } from '@expo/vector-icons'
import { useGetData, useMedical } from '../hooks'


const MedicalInfo = ({navigation}:any) =>{



    const {




        height , setHeight, weight, setWeight, glucose, setGlucose, blood, setBlood
        ,aller, setAll, cond, setCond, med, setMed, Update} = useMedical(navigation)
    const {
        conditions, allergies , medications,
        GetConditions, GetMedications, GetAllergies,
        
    
    } = useGetData()
    const [open, setOpen] = React.useState("none")
    const {user, GetMe} = useGetMe(navigation)
    React.useEffect(()=>{
        GetMe()

        //get conditions 

        GetConditions()
        GetAllergies()
        GetMedications()
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
            Text="Enter Your Weight"
            Number={true}
            Value={weight}
            OnChange={setWeight}
        />

        <Input
            Text="Enter Your Height"
            Number={true}
            Value={height}
            OnChange={setHeight}


        />

        <Input
            Text="Enter Your Glecemia level (0=No Glecemia)"
            Number={true}

            Value={glucose}
            OnChange={setGlucose}
        />

        <DropDownPicker
                open={op}
                value={blood}
                items={bloods}
                placeholder='Choose your Blood Type'
                setOpen={setOp}
                setValue={setBlood}
                setItems={setBloods     }
                style={{
                borderColor: "#555",
                borderWidth: 0.5,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 0.5,
                },
                shadowOpacity: 0.5,
                shadowRadius: 6,
                elevation: 6,
                borderRadius: 5,
                width : "90%",
                alignSelf:"center"
                }}
                max={8}
                maxHeight={900}
                

                //number of lines 

                
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
                Select your Allergies
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
                        onPress={()=>{
                            if(!aller){
                                setAll(String(data.id))
                            }
                            else{
                                setAll(aller + "," + String(data.id))
                            }
                           

                            console.log("Fuk my life",aller )
                        }}
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
                                {data.title}
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
                        onPress={()=>{
                            if(!med){
                                setMed(String(data.id))
                            }
                            else{
                                setMed(med + "," + String(data.id))
                            }
                           

                        }}
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
                                {data.title}
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
                        onPress={()=>{
                            if(!cond){
                                setCond(String(data.id))
                            }
                            else{
                                setCond(cond + "," + String(data.id))
                            }
                           

                        }}
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
                                {data.title}
                            </Native.Text>
                        </Native.TouchableOpacity>
                    )
                })
               }
               </Native.View>
               <Native.TouchableOpacity  onPress={()=>{
                Update()
               }} style ={{width :"60%" , padding:15, backgroundColor:"#F63C3C" , borderRadius:5, alignSelf:"center", margin:10, display : "flex" , alignContent:"center" , justifyContent:"center",
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
            
            }}>
                    <Native.Text style={{color:"#fff", textAlign:"center"}}>
                        Submit your informations
                    </Native.Text>
               </Native.TouchableOpacity>
            </Native.ScrollView>
            <SideMenu
            
               Hide={
                     setOpen
               }
               Display={open}

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


export default MedicalInfo