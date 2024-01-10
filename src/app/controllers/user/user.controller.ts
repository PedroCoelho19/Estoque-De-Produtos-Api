import { User } from "../../@types";
import { userRepositorys } from "../../repositorys";
import { Request , Response } from "express";

class UserController{
    public async create(req:Request, res:Response){
        const { name , password, email}:User = req.body
        
        const data = {
            name,
            password,
            email
        }

        try {
            const user = await userRepositorys.create(data)
            res.status(201).send(user)
        } catch (error) {
            res.status(400).send(error)
        }
    }
}

export default new UserController();