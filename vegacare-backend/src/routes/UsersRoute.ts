import { Router } from "express"
import GetAll from "../controllers/users/getAll.controller"
//import Update from '../controllers/users/update.controller'
import Delete from "../controllers/users/delete.controller"
import Change from "../controllers/users/change.controller"
import Create from "./../controllers/users/create.controller"
import SignIn from "./../controllers/users/signin"
import GetMe from "../controllers/users/getMe.controller"
import GetCleanData from "../controllers/users/getCleanData.controller"
import resetPassword from "../controllers/users/resetPassword.controller"
import Generate from "../controllers/users/GenerateCode"
import ResetPass from "../controllers/users/ResetPass"
import AppendHealtData from "../controllers/users/appendHealthData.controller"
import { saveHealthData, getHealthData } from "../controllers/health/health"
const UsersRoute = Router()

UsersRoute.post("/", Create)
UsersRoute.get("/", GetAll)
//UsersRoute.put("/:id", Update)
UsersRoute.delete("/:id", Delete)
UsersRoute.patch("/", Change)
UsersRoute.post("/login", SignIn)
UsersRoute.get("/me", GetMe)
UsersRoute.get("/cleanData", GetCleanData)
UsersRoute.post("/resetpassword", resetPassword)
UsersRoute.post("/reqReset", Generate)
UsersRoute.post("/reset", ResetPass)
UsersRoute.patch("/append", AppendHealtData)
UsersRoute.post("/saveHealthData", saveHealthData)
UsersRoute.get("/getHealthData", getHealthData)

export default UsersRoute
