import { User } from "../../@types";
import { userRepositorys } from "../../repositorys";
import { Request , Response } from "express";

class UserController{
    public async create(req:Request, res:Response){
        const { name , password, email}:User = req.body
        
        const data:User = { name, password, email}
        try {
            const user = await userRepositorys.create(data)
            res.status(user.status).json({data: user.data , msg: user.message}) 
        } catch (error) {
            res.status(400).json(error)
        }
    }

    public async list(req:Request, res:Response){   
       try {
        const user = await userRepositorys.list()
        res.status(user.status).json({data: user.data , msg: user.message})
       } catch (error) {
        res.status(400).json(error)
       }
    }
    
    public async update(req:Request, res:Response){
        try {
            const { userId } = req.params as { userId: string };
            const { name , email }: User = req.body

            const data = {
                name,
                email,
                password: null
            }

            const user = await userRepositorys.update(data ,userId)
            res.status(user.status).json({data: user.data , msg: user.message})
        } catch (error) {
            res.status(400).json(error)
        }
    }

    public async delete(req:Request, res:Response){
        try {
            const { userId } = req.params as { userId: string }; 
            const user = await userRepositorys.delete(userId)
            res.status(user.status).json({data: user.data , msg: user.message})
        } catch (error) {
            res.status(400).json(error)
        }
    }
}

export default new UserController();