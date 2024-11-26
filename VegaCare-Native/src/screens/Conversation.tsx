import * as React from 'react'
import * as Native from 'react-native'

import { Header } from './../components'
import {chatStyle} from './../styles'
import {Sender, Receiver,ProfileHeader, SideMenu , Footer } from './../components'
import { Dimensions } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import useGetMe from '../hooks/useGetme'
import useChatter from '../hooks/contactor'
import { useConsult } from '../hooks'
const Chat = ({navigation} : any) =>{
    const screenHeight = Native.Dimensions.get('window').height
  const scrollViewHeight = screenHeight * 0.8
    const [open, setOpen] = React.useState(false)
  const {user, GetMe} = useGetMe(navigation)
  const scrollViewRef = React.useRef<Native.ScrollView>(null)

  const {all, setAll, GetData} = useConsult(navigation)
  React.useEffect(()=>{
        GetMe()

        GetData()

        
  }, [])

  

  const  {
    message , setMessage, SendAndReceive,conversation, setConv
        } = useChatter(all)



        React.useEffect(() => {
          // Automatically scroll to the bottom whenever the conversation is updated
          if (scrollViewRef.current) {
            scrollViewRef.current.scrollToEnd({ animated: true });
          }
        }, [conversation])
    return (
        <Native.ScrollView style={chatStyle.container}>
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
                width : "100%" , 
                height: scrollViewHeight,
                borderBottomWidth:1, 
                borderColor:"#ccc",
                
            }}
            
            ref={scrollViewRef}>
                
                 
                {
                    conversation.map((item:any, index:any)=>{
                        if(item.part === "user"){
                            return (
                              <Sender
                                    key={index}
                                    message={item.message}
                                />
                                
                            )
                        }else{
                            return (
                                

                                <Receiver
                                    key={index}
                                    message={item.message}
                                />
                            )
                        }
                    }
                

              )
              }
            </Native.ScrollView>

            {
              /*
              <Native.View style={chatStyle.message}>
  <Native.TextInput
    placeholder='Enter your message'
    value={message}
    onChange={(e)=>{
      setMessage(e.nativeEvent.text)
    }}
    style={chatStyle.input}
  />
  <Native.TouchableOpacity style={chatStyle.sendbtn} onPress={async()=>{
    await SendAndReceive()
  }} >
    <FontAwesome name="send" size={24} color="white" />
  </Native.TouchableOpacity>
</Native.View>
              */
            }

            <Native.View style={chatStyle.block}>
              <Native.TextInput
                placeholder='Enter your message here'
                style={chatStyle.inp}
                value={message}
                onChange={(e)=>{
                  setMessage(e.nativeEvent.text)
                }}
              />
              <Native.TouchableOpacity style={chatStyle.sendbtn} onPress={async()=>{
              await SendAndReceive()
            }} >
              <FontAwesome name="send" size={18} color="white" />
            </Native.TouchableOpacity>
            </Native.View>

          <Native.View></Native.View>


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
        </Native.ScrollView>
    )
}

export default Chat