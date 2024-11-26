import { Router } from "express";
import resetPassword from "../controllers/sendMail/resetPassword.controller";

const MailRoute = Router()

MailRoute.post('/resetpassword', resetPassword)

export default MailRoute