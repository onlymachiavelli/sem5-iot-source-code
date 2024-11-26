import notificationsModel from "../models/MongooseSchema/notifiations.model"

const GetAll =async  () =>{
    return await  notificationsModel.find()
}


const Create =async  (datas : any ) =>{
    const notif = new notificationsModel(datas);
    await notif.save()
}


const GetOne = async (id : number) =>{
    return await notificationsModel.findOne({
        id : id
    })
}


export { 
    GetAll, 
    Create , 
    GetOne
}