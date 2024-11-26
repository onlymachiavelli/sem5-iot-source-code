import { Router } from "express"
import Ping from "../controllers/ping"

const testRoute = Router()

testRoute.get("", Ping)

export default testRoute