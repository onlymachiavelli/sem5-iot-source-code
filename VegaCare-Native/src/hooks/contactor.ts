import * as React from 'react'

import axios from 'axios'
import {AsyncStorage} from './../hooks'
import { ToastAndroid } from 'react-native'
 

const useChatter = (user : any) => {
  console.log("The fcker is  ", user)
    // the point is to send a message and receive ones
    const [message, setMessage] = React.useState("")
    const [conversation, setConv]: any = React.useState([])

    const SendAndReceive = async () => {
      if (!message) {
        ToastAndroid.show(
          "PLEASE ENTER A MESSAGE",
          ToastAndroid.SHORT
        )
        return 
      }
      setConv((prevConversation: any) => [
        ...prevConversation,
        {
          part: "user",
          message: message,
        },
      ])
      const ip: any = await AsyncStorage.GetOne("ip")
      if (!ip) alert("Error getting ip ")
      console.log(message)
  
      try {
        const postData = {
          user_input: message,
          name: user ? user.name : "",
          bday: user ? user.bday : "",
          gender: user ? user.gender : "",
          height: user ? user.height : "",
          weight: user ? user.weight : "",
          bloodType: user ? user.blood_type : "",
          glycemia: user ? user.glycemia : "",
          allergies: user ? user.allergies : "",
          conditions: user ? user.conditions : "",
          medications: user ? user.medications : "",
        }
    
        console.log("POST Data:", postData); // Add this line to check the data being sent
    
        const res = await axios.post(`http://${ip}:5000/get_response`, postData)
  
        // Update the conversation with both user and bot messages
        setConv((prevConversation: any) => [
          ...prevConversation,
          {
            part: "bot",
            message: res.data.response, // Assuming the response is in res.data.response
          },
        ]);
        setMessage("")
  
        console.log("Done");
      } catch (e) {
        console.log(e)
      }
    };
  
    return {
      message,
      setMessage,
      SendAndReceive,
      conversation,
      setConv,
    }
  }
  
  export default useChatter
  