import Medications from "../models/PSchemas/Medications.schema"

const GetAll = async () =>{
    return Medications.find()
}

const Save = async (data : any) => {
    await Medications.save(data)
}

const Delete = async (id : any) => {
    await Medications.delete(id)
}

const GetBy = async (id : any, field:any) => {
    return await Medications.findOneBy(
        {
            [field] : id
        }
    )
}

const GetWhere = async (data : any) => {
    return await Medications.findBy(data)
}

const Update = async (id : any, data : any) => {
    await Medications.update(id , data)
}

export {
    GetAll,
    Save,
    Delete,
    GetBy,
    GetWhere,
    Update
}