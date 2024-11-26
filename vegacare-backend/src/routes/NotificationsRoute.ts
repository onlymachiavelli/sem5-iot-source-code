import { Router } from "express";
import Create from "../controllers/notifications/create.controller"
import GetAll from "../controllers/notifications/getAll.controller";

const NotificationsRoute = Router()

NotificationsRoute.post("/", Create)
NotificationsRoute.get("/",GetAll)

export default NotificationsRoute