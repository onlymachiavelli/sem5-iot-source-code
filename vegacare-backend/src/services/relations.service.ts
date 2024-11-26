import Relations from "../models/PSchemas/relations.entity"

const GetAll = async () =>{
    return Relations.find()
}

const Save = async (data : any) => {
    await Relations.save(data)
}

const Delete = async (id : any) => {
    await Relations.delete(id)
}

const GetBy = async (id : any, field:any) => {
    return await Relations.findOneBy(
        {
            [field] : id
        }
    )
}

const GetWhere = async (data : any) => {
    return await Relations.findBy(data)
}

const Update = async (id : any, data : any) => {
    await Relations.update(id , data)
}

export {
    GetAll,
    Save,
    Delete,
    GetBy,
    GetWhere,
    Update
}