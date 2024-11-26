

import * as Native from 'react-native'
import * as React from 'react'
import { relationsStyle } from '../styles'
import Male from './../lottieFiles/Male.json'
import Female from './../lottieFiles/Female.json'
import Lottie from 'lottie-react-native'

import {AddSuper} from './../components'
import {Input} from './'

const Patients = ({...props}) =>{

    //animation ref 
    const animation = React.useRef(null)

    console.log("shit", props.Rel)
    return (
        <Native.ScrollView style={relationsStyle.superList}>
            <Native.Text style={relationsStyle.title}>
                My Patients
            </Native.Text>
            

            <Native.View style={relationsStyle.card}>
                <Native.View style={
                    {
                        display: "flex" , 
                        alignItems:"center" , 
                        justifyContent:"center" , 
                        flexDirection:"row"
                    }
                }>
                <Lottie

                    source={Male}
                    style ={relationsStyle.avatar}
                    autoPlay
                    loop
                    ref={animation}

                    />

                    <Native.Text style={relationsStyle.name}>
                    Alaa Eddine Barka
                    </Native.Text>

                </Native.View>


                
            </Native.View>

            <Native.View style={{
                    width  :"100%" , 
                    height : "auto" , 
                    padding : 10 , 
                    display : "flex" , 
                    alignItems:"center",
                    backgroundColor:"#eee",
                    gap:5,
                    justifyContent:"center",
                    paddingBottom : 30

                }}>
                    <Native.Text>
                        Baba Ali Requested to access to you 
                    </Native.Text>

                    <Native.View style={{
                        width : "100%" , 
                        height : "auto", 
                        display : "flex" , 
                        alignItems:"center" , 
                        justifyContent:"center",
                        flexDirection:"row",
                        gap:10,
                                            }}>
                    <Native.TouchableOpacity style={{
                        width : "30%" , 
                        padding : 10, 
                        display : "flex" , 
                        alignItems:"center" ,
                        justifyContent:"center", 
                        backgroundColor:"#44781A",
                        borderRadius:3,

                    }}>
                        <Native.Text  style={{color:"#fff"}}>
                            Accept
                        </Native.Text>
                    </Native.TouchableOpacity>


                    <Native.TouchableOpacity style={{
                        width : "30%" , 
                        padding : 10, 
                        display : "flex" , 
                        alignItems:"center" ,
                        justifyContent:"center", 
                        backgroundColor:"#E84444",
                        borderRadius:3,
                    }}>
                        <Native.Text style={{color:"#fff"}}>
                            Refuse
                        </Native.Text>
                    </Native.TouchableOpacity>
                    </Native.View>
                </Native.View>




                <Native.View style={relationsStyle.card}>
                <Native.View style={
                    {
                        display: "flex" , 
                        alignItems:"center" , 
                        justifyContent:"center" , 
                        flexDirection:"row"
                    }
                }>
                <Lottie

                    source={Male}
                    style ={relationsStyle.avatar}
                    autoPlay
                    loop
                    ref={animation}

                    />

                    <Native.Text style={relationsStyle.name}>
                    Alaa Eddine Barka
                    </Native.Text>

                </Native.View>


                
            </Native.View>

            <Native.View style={{
                    width  :"100%" , 
                    height : "auto" , 
                    padding : 10 , 
                    display : "flex" , 
                    alignItems:"center",
                    backgroundColor:"#eee",
                    gap:5,
                    justifyContent:"center",
                    paddingBottom : 30

                }}>
                    <Native.Text>
                        Baba Ali Requested to access to you 
                    </Native.Text>

                    <Native.View style={{
                        width : "100%" , 
                        height : "auto", 
                        display : "flex" , 
                        alignItems:"center" , 
                        justifyContent:"center",
                        flexDirection:"row",
                        gap:10,
                                            }}>
                    <Native.TouchableOpacity style={{
                        width : "30%" , 
                        padding : 10, 
                        display : "flex" , 
                        alignItems:"center" ,
                        justifyContent:"center", 
                        backgroundColor:"#44781A",
                        borderRadius:3,

                    }}>
                        <Native.Text  style={{color:"#fff"}}>
                            Accept
                        </Native.Text>
                    </Native.TouchableOpacity>


                    <Native.TouchableOpacity style={{
                        width : "30%" , 
                        padding : 10, 
                        display : "flex" , 
                        alignItems:"center" ,
                        justifyContent:"center", 
                        backgroundColor:"#E84444",
                        borderRadius:3,
                    }}>
                        <Native.Text style={{color:"#fff"}}>
                            Refuse
                        </Native.Text>
                    </Native.TouchableOpacity>
                    </Native.View>
                </Native.View>


                <Native.View style={relationsStyle.card}>
                <Native.View style={
                    {
                        display: "flex" , 
                        alignItems:"center" , 
                        justifyContent:"center" , 
                        flexDirection:"row"
                    }
                }>
                <Lottie

                    source={Male}
                    style ={relationsStyle.avatar}
                    autoPlay
                    loop
                    ref={animation}

                    />

                    <Native.Text style={relationsStyle.name}>
                    Alaa Eddine Barka
                    </Native.Text>

                </Native.View>


                
            </Native.View>

            <Native.View style={{
                    width  :"100%" , 
                    height : "auto" , 
                    padding : 10 , 
                    display : "flex" , 
                    alignItems:"center",
                    backgroundColor:"#eee",
                    gap:5,
                    justifyContent:"center",
                    paddingBottom : 30

                }}>
                    <Native.Text>
                        Baba Ali Requested to access to you 
                    </Native.Text>

                    <Native.View style={{
                        width : "100%" , 
                        height : "auto", 
                        display : "flex" , 
                        alignItems:"center" , 
                        justifyContent:"center",
                        flexDirection:"row",
                        gap:10,
                                            }}>
                    <Native.TouchableOpacity style={{
                        width : "30%" , 
                        padding : 10, 
                        display : "flex" , 
                        alignItems:"center" ,
                        justifyContent:"center", 
                        backgroundColor:"#44781A",
                        borderRadius:3,

                    }}>
                        <Native.Text  style={{color:"#fff"}}>
                            Accept
                        </Native.Text>
                    </Native.TouchableOpacity>


                    <Native.TouchableOpacity style={{
                        width : "30%" , 
                        padding : 10, 
                        display : "flex" , 
                        alignItems:"center" ,
                        justifyContent:"center", 
                        backgroundColor:"#E84444",
                        borderRadius:3,
                    }}>
                        <Native.Text style={{color:"#fff"}}>
                            Refuse
                        </Native.Text>
                    </Native.TouchableOpacity>
                    </Native.View>
                </Native.View>
                <Native.View style={relationsStyle.card}>
                <Native.View style={
                    {
                        display: "flex" , 
                        alignItems:"center" , 
                        justifyContent:"center" , 
                        flexDirection:"row"
                    }
                }>
                <Lottie

                    source={Male}
                    style ={relationsStyle.avatar}
                    autoPlay
                    loop
                    ref={animation}

                    />

                    <Native.Text style={relationsStyle.name}>
                    Alaa Eddine Barka
                    </Native.Text>

                </Native.View>


                
            </Native.View>

            <Native.View style={{
                    width  :"100%" , 
                    height : "auto" , 
                    padding : 10 , 
                    display : "flex" , 
                    alignItems:"center",
                    backgroundColor:"#eee",
                    gap:5,
                    justifyContent:"center",
                    paddingBottom : 30

                }}>
                    <Native.Text>
                        Baba Ali Requested to access to you 
                    </Native.Text>

                    <Native.View style={{
                        width : "100%" , 
                        height : "auto", 
                        display : "flex" , 
                        alignItems:"center" , 
                        justifyContent:"center",
                        flexDirection:"row",
                        gap:10,
                                            }}>
                    <Native.TouchableOpacity style={{
                        width : "30%" , 
                        padding : 10, 
                        display : "flex" , 
                        alignItems:"center" ,
                        justifyContent:"center", 
                        backgroundColor:"#44781A",
                        borderRadius:3,

                    }}>
                        <Native.Text  style={{color:"#fff"}}>
                            Accept
                        </Native.Text>
                    </Native.TouchableOpacity>


                    <Native.TouchableOpacity style={{
                        width : "30%" , 
                        padding : 10, 
                        display : "flex" , 
                        alignItems:"center" ,
                        justifyContent:"center", 
                        backgroundColor:"#E84444",
                        borderRadius:3,
                    }}>
                        <Native.Text style={{color:"#fff"}}>
                            Refuse
                        </Native.Text>
                    </Native.TouchableOpacity>
                    </Native.View>
                </Native.View>




                





            
            
        </Native.ScrollView>
    )
}

export default Patients