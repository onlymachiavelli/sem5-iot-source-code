import * as Native from 'react-native';
import * as React from 'react';

import { relationsStyle } from '../styles';
import { ProfileHeader, SideMenu, Footer, AddSuper, Supervisors, Patients,Loading } from '../components';
import { useGetMe, useRelations } from '../hooks'

const Relations = ({ navigation }: any) => {
    const { GetMe, user } = useGetMe(navigation);
    const [open, setOpen] = React.useState(false);
    const [display, setDisplay] = React.useState<React.ReactNode | null>(null);
  const {GetRelations, relations} = useRelations()
  React.useEffect(() => {
    GetMe()
    GetRelations()
  }, [])

  React.useEffect(() => {
    if (user) {
      setDisplay(user.user.type === 'patient' ? <Supervisors Rel={relations} /> : <Patients Rel={relations} />);
    }


  }, [user])


  if (relations) {
    console.log("damn" , relations)
  }
  return !user || !relations ? (<Loading Open={true} />):(
    <Native.View style={relationsStyle.container}>
      <ProfileHeader
        Display={setOpen}
        Status={open}
        ToProfile={() => {
          navigation.navigate('Profile');
        }}
        Name={user ? user.user.fullname : 'Loading'}
        Gender={user ? user.user.gender : 'Loading'}
      />

      {
      
      display
      
      }

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

      <SideMenu Hide={setOpen} Display={open}
      
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
  );
};

export default Relations;
