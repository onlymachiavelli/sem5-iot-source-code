import * as Native from 'react-native'
import * as React from 'react'
import { relationsStyle } from '../styles'
import Male from './../lottieFiles/Male.json'
import Female from './../lottieFiles/Female.json'
import Lottie from 'lottie-react-native'
import { AddSuper } from './../components'
import { Input } from './'
import { useGetMe, useRelations } from '../hooks'
import { User } from './svg'

const Supervisors = ({ ...props }) => {
    const {
      relations,
      GetRelations,
    } = useRelations();
  
    React.useEffect(() => {
      GetRelations();
    }, []);
  
    // Animation ref
    const animation = React.useRef(null);
  
    return (
      <Native.ScrollView style={relationsStyle.superList}>
        <AddSuper />
        <Native.Text style={relationsStyle.title}>My SuperVisors</Native.Text>
        {relations?.map((item:any, key:any) => ( 
          <Native.View style={relationsStyle.card} key={key}>
            <Native.View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <Lottie
                source={Male}
                style={relationsStyle.avatar}
                autoPlay
                loop
                ref={animation}
              />
              <Native.Text style={relationsStyle.name}>
                {item ? item.name : "Loading"}
              </Native.Text>
            </Native.View>
          </Native.View>
        ))}
      </Native.ScrollView>
    )
  }
  export default Supervisors
