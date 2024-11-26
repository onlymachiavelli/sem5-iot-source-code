import mongoose from "mongoose"

const notificationSchema = new mongoose.Schema({
    author: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: true,
      },
    type : {
        type : String ,
        require : true, 
        enum:["Emergency" , "Regular", "Reminder", "RequestAccess"]
    },
    title :{
        type : String ,
        require : true
    }, 
    description : {
        type : String ,
        require : true, 
    },
    created_at : {
        type : Date
    }
})

export default mongoose.model("Notification", notificationSchema)