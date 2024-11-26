import Allergies from "../models/PSchemas/Allergies.schema"

const GetAll = async () =>{
    return Allergies.find()
}

const Save = async (data : any) => {
    await Allergies.save(data)
}

const Delete = async (id : any) => {
    await Allergies.delete(id)
}

const GetBy = async (id : any, field:any) => {
    return await Allergies.findOneBy(
        {
            [field] : id
        }
    )
}

const GetWhere = async (data : any) => {
    return await Allergies.findBy(data)
}

const Update = async (id : any, data : any) => {
    await Allergies.update(id , data)
}

export {
    GetAll,
    Save,
    Delete,
    GetBy,
    GetWhere,
    Update
}