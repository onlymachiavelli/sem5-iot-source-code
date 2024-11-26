import { Router } from "express"

import Verify from "../controllers/bc/verifyToken.controller"
const BCRouter  = Router()


BCRouter.get("/" ,Verify)


export default BCRouter