import mongoose from "mongoose"

const MongoConnect = async () =>{
    const uri  : any = String (process.env.URI)

    try {
        await mongoose.connect(uri).then(()=>{
            console.log("Connected to MongoDB")
        }).catch(e=>{
            console.log("Check the credentials ! ", e)
            
        })
        
    }
    catch (error) {
        console.log("Error impllementing ! " , error)
    }
        
}



export default MongoConnect