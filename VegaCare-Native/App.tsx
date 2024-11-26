import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import * as Screens from './src/screens'
const Stack = createStackNavigator()
import {Footer} from './src/components'
const App = () =>{
  //create stack 

  return (
    <NavigationContainer >
      <Stack.Navigator 
        initialRouteName="Tester"
      >
        
          <Stack.Screen 
            name="Tester"
            component={Screens.Tester}
          />

        <Stack.Screen 
            name="Signin"
            component={Screens.SignIn}

            //remove the header 
            options={{
              headerShown: false
            }}
          />

        <Stack.Screen 
            name="Signup"
            component={Screens.Signup}

            //remove the header 
            options={{
              headerShown: false
            }}
          />


        <Stack.Screen 
            name="Happy"
            component={Screens.Happy}

            //remove the header 
            options={{
              headerShown: false
            }}
          />

        <Stack.Screen 
            name="Profile"
            component={Screens.Profile}

            //remove the header 
            options={{
              headerShown: false
            }}
          />

        <Stack.Screen 
            name="HeartStatus"
            component={Screens.HeartStatus}

            //remove the header 
            options={{
              headerShown: false
            }}
          />


        <Stack.Screen 
            name="MedicalInfo"
            component={Screens.MedicalInfo}

            //remove the header 
            options={{
              headerShown: false
            }}
          />



        <Stack.Screen 
            name="Scanner"
            component={Screens.Scanner}

            //remove the header 
            options={{
              headerShown: false
            }}
          />


        <Stack.Screen 
            name="ConsultMedical"
            component={Screens.ConsultMedical}

            //remove the header 
            options={{
              headerShown: false
            }}
          />

        <Stack.Screen 
            name="Chat"
            component={Screens.Chat}

            //remove the header 
            options={{
              headerShown: false
            }}
          />

          
        <Stack.Screen 
            name="Restore"
            component={Screens.Restore}

            //remove the header 
            options={{
              headerShown: false
            }}
          />

          <Stack.Screen 
            name="Verify"
            component={Screens.Verify}

            //remove the header 
            options={{
              headerShown: false
            }}
          />

        <Stack.Screen 
            name="Relations"
            component={Screens.Relations}

            //remove the header 
            options={{
              headerShown: false
            }}
          />

        <Stack.Screen 
            name="Location"
            component={Screens.Location}

            //remove the header 
            options={{
              headerShown: false
            }}
          />


        <Stack.Screen 
            name="Dashboard"
            component={Screens.Dashboard}

            //remove the header 
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen 
            name="Heart"
            component={Screens.Heart}

            //remove the header 
            options={{
              headerShown: false
            }}
          />
      </Stack.Navigator>

      
    </NavigationContainer>
  )
}

export default  App