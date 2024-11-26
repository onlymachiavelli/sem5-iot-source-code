import usersModel from "../models/MongooseSchema/users.model"



const GetAll =async  () =>{
    return await  usersModel.find()
}


const Create =async  (user : any ) =>{
    
    await user.save()
}


const GetOne = async (id : number) =>{
    return await usersModel.findOne({
        id : id
    })
}


export { 
    GetAll, 
    Create , 
    GetOne
}