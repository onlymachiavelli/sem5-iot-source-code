import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    id : {
        type : Number
    },
    Monitor :{
        //heart monitor
        heart : [

            {
                beat : {
                    type : Number  , 
                    require: true
                }, 
                time :{
                    type : Date ,
                    require : true 
                }
            }

        ], 
        //oxygen monitor 
        oxygen : [
            {
                mm : {
                    type : Number  , 
                    require: true 
                }, 
                time :{
                    type : Date ,
                    require : true 
                }
            }
        ],
        //temperature measure 
        temperature : [
            {
                degree : {
                    type : Number  , 
                    require: true 
                }, 
                time :{
                    type : Date ,
                    require : true 
                }
            }
        ],
        //location 
        location : [
            {
                x : {
                    type : Number  ,
                    require: true
                },
                y : {
                    type : Number  ,
                    require: true
                },
                steps : {
                    type : Number , 
                    require : true
                },
                time :{
                    type : Date ,
                    require : true 
                }
            }
        ],


    },/*
    Notification  :[
        {
            type : {
                type : String ,
                require : true, 
                enum:["Emergency" , "Regular", "Reminder", "RequestAccess"]
            },
            title :{
                type : String ,
                require : true
            }, 
            
        }
    ]
    ,*/
    
    //dates 
    created_at : {
        type : Date
    },
    updated_at : {
        type : Date
    }
})

export default mongoose.model("Users", userSchema)

