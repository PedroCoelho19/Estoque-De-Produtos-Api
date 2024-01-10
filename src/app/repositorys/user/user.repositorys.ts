import { User } from "../../@types"
import {prisma} from "../../database/prisma"


class UserRepository{
    async create(data:User){
        const user = await prisma.user.create({
            data
        })
        return user
    }
}

export default new UserRepository()