import AsyncStorage from "@react-native-async-storage/async-storage"



 
const GetOne = async (target : any) =>{
    return await AsyncStorage.getItem(target)
}

const SetOne = async (target : any , value : any) =>{
     AsyncStorage.setItem(target , value)
}

const DeleteOne = async (target : any) =>{
      AsyncStorage.removeItem(target)
}

const GetAll = async () =>{
    //get all cache 

    
    let keys:any = []
    let values:any = []
        keys = await AsyncStorage.getAllKeys()
        values = await AsyncStorage.multiGet(keys)
        return values
}

const FreeUp = async () => await AsyncStorage.clear()
export  {GetAll,GetOne,SetOne, DeleteOne, FreeUp}