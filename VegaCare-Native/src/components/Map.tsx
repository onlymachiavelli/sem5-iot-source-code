import * as React from 'react'
import * as Native from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { AntDesign, FontAwesome } from '@expo/vector-icons';

const { height } = Native.Dimensions.get('screen')

const latitude = 35.7072
const longitude = 9.7757
const CustomMarker = () => (
  //<FontAwesome name="map" size={25} color="white" />
  
  <Native.Image
    source={{ uri: 'https://en.wikipedia.org/wiki/File:Peter_Griffin.png' }}
    style={{ width: 25, height: 38,resizeMode: 'stretch', }} 
  />
)

const Map = ({ ...props }) => {
  return (
    <Native.View style={{ width: '100%', height }}>
      <MapView
        initialRegion={
          {
              latitude: 36.8354,
              longitude: 10.2083,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
          }
      }
    
         



      
        style={{
          width: '100%',
          height: '100%',
        }}


      >
        <Marker  coordinate={{

              latitude:36.8354,//location ? location.coords.latitude : 0,
              longitude:10.2083//location ? location.coords.longitude : 0
              }}
            title='Hey' 
            description='This is My Location'
        >
          <CustomMarker />
        </Marker>
      </MapView>
    </Native.View>
  )
}

export default Map
