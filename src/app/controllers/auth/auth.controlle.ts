import { Request, Response } from "express";
import {authRepository} from "../../repositorys"

class AuthController {
    public async login(req:Request, res:Response){
        try {
            const {email , password}: {email: string , password:string}  = req.body
            const user = await authRepository.login({email , password})
            res.status(user.status).json({data: user.data, msg: user.message , token: user.token})
        } catch (error) {
            res.status(400).json(error)
        }
    }
}

export default new AuthController()