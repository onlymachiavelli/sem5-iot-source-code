import { Router } from "express";
import Create from '../controllers/allergies/create.controller'
import GetAll from '../controllers/allergies/getAll.controller'
import Update from '../controllers/allergies/update.controller'
import Delete from '../controllers/allergies/delete.controller'

const AllergiesRoute = Router()

AllergiesRoute.post("/", Create)
AllergiesRoute.get("/", GetAll)
AllergiesRoute.put("/:id", Update)
AllergiesRoute.delete("/:id", Delete)

export default AllergiesRoute