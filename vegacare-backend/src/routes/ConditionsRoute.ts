import { Router } from "express";
import Create from './../controllers/conditions/create.controller'
import GetAll from './../controllers/conditions/getAll.controller'
import Update from './../controllers/conditions/update.controller'
import Delete from './../controllers/conditions/delete.controller'

const ConditionsRoute = Router()

ConditionsRoute.post("/", Create)
ConditionsRoute.get("/", GetAll)
ConditionsRoute.put("/:id", Update)
ConditionsRoute.delete("/:id", Delete)

export default ConditionsRoute