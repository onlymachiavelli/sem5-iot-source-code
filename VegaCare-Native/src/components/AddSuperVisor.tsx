
import * as Native from 'react-native'
import { relationsStyle } from '../styles'
import { useGetMe, useRelations } from '../hooks'


import {Input} from './'



const AddSuper = ({...props}) =>{
    const {name, setName, 
        phone, setPhone,
        SaveRelation,
        AcceptOrRefuse,
        GetRelations} = useRelations()
    return (
        <Native.View style={relationsStyle.addsuper}>
            <Native.Text style={relationsStyle.title}>Add a SuperVisor</Native.Text>

            <Input
                Text={"Contact name"}
                Type={
                    "name"
                }
                Secure={false}
                Value={name}
                OnChange={setName}
            />

            <Input
                Text={"Contact phone number"}
                Type={
                    "telephoneNumber"
                }
                Secure={false}
                Value={phone}
                OnChange={setPhone}
                Number={true}
            />

            <Native.TouchableOpacity style={relationsStyle.addBtn} 
                    onPress={()=>{
                        SaveRelation(name, phone)
                    }}>
                <Native.Text style={{color:"white"}}>
                    Add To the DB
                </Native.Text>
            </Native.TouchableOpacity>
        </Native.View>
    )
}

export default AddSuper