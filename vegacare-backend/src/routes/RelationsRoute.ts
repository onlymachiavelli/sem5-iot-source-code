import { Router } from "express";
import Create from "../controllers/relations/create.controller";
import GetAll from "../controllers/relations/getAll.controller";
import Validation from "../controllers/relations/validation.controller";
import GetRelated from "../controllers/relations/GetRelated.controller";

const RelationsRoute = Router()

RelationsRoute.post("/", Create)
RelationsRoute.get("/", GetAll)
RelationsRoute.post("/validate", Validation)
RelationsRoute.post("/getRelated", GetRelated)

export default RelationsRoute