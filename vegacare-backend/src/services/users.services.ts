import Users from "../models/PSchemas/user.Schema"


const target :any =  ["id", "fullname" , "email"  , "phone" , "gender" , "address", "bday","avatar" , "created_at", "updated_at" , "type" , "blood_type" , "glycemia" , "allergies", "conditions" , "medications","height","weight","code" , "codeValidity"]

const Save = async (user: any) =>{
    await Users.save(user)
}

const GetAll = async () =>{
    return await Users.find()
}

const GetOne = async (field : any, trget : any) =>{
    return await Users.findOne({
        where : {
            [field] : trget
        } , 
        select:target
    })
}


//delete 
const Delete = async (field : any, target : any ) =>{
    await Users.delete({
        [field] : [target]
    })
}

const GetPass = async (field : any , target : any ) =>{
    return await Users.findOne({
        where : {
            [field] : target
        } , 
        select:["password"]
    })    
}

const Update = async (id : any, data : any) => {
    await Users.update(id , data)
}

export {

    Save,
    GetAll,
    GetOne,
    Delete, 
    GetPass,
    Update
}