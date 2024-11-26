import express from "express"
import "dotenv/config"
import { json } from "body-parser"
import appDataSource from "./utils/POSTGRES"
import MongoConnect from "./utils/MongoConnect"
import testRoute from "./routes/Ping"
import ConditionsRoute from "./routes/ConditionsRoute"
import MedicationsRoute from "./routes/MedicationsRoute"
import AllergiesRoute from "./routes/AllergiesRoute"
import UsersRoute from "./routes/UsersRoute"
import MailRoute from "./routes/SendMail.Route"
import RelationsRoute from "./routes/RelationsRoute"
import NotificationsRoute from "./routes/NotificationsRoute"
import BCRouter from "./routes/bc.route"
import {createServer} from "http";
import { Server } from "socket.io";
import { connected } from "process"

const cors = require("cors")

const app = express()

app.use(json())
app.use(cors())


const PORT: any = process.env.PORT || 3000
app.listen(PORT,async () =>{
  console.log(`Listening on ${PORT}`)

  appDataSource.initialize().then(async (resp)=>{
    console.log("Connected to the PSDB")
    await MongoConnect().then(re=>{
      
      app.use("/ping", testRoute)
      app.use("/conditions", ConditionsRoute)
      app.use("/medications", MedicationsRoute)
      app.use("/allergies", AllergiesRoute)
      app.use("/users", UsersRoute)
      app.use("/mails", MailRoute)
      app.use("/relations", RelationsRoute)
      app.use("/notifications", NotificationsRoute)
      app.use("/bc", BCRouter)

      //the rest of the middle wares ! 
    })
  }).catch(e=>{
    console.log(e)
  })



  //connect to PS
  //connect to Mongoodse
})

export default app


// socket stuff

const httpServer = createServer(app)
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket:any) => {
  console.log(`connected with the socket ID ${socket.id}`)
  
  socket.on("linkIDs",(userID : number, socketID : any)=>{
    console.log(`the socket ID "${socketID}" is linked with the user ID "${userID}"`)
  })
  
})


httpServer.listen(8080);
