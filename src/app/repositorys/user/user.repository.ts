import { User } from "../../@types"
import {prisma} from "../../database/prisma"
import bcrypt from "bcrypt"


class UserRepository{
        async create(data: User) {

            const userExists = await prisma.user.findUnique({
                where:{
                    email: data.email
                }
            })

            if(userExists){
                return { status: 401, message: 'Email ja cadastrado!', data: null };
            }

            const salt = bcrypt.genSaltSync(10);
    
            const passwordEncrypted = bcrypt.hashSync(data.password, salt);
            const user = await prisma.user.create({
                data: {
                    ...data,
                    password: passwordEncrypted,
                    status: 1
                },
            });
    
            return { status: 201, message: 'Usuário criado com sucesso!', data: user };
        }
    
    public async list(){
        const user = await prisma.user.findMany()
        return { status: 200, message: "OK!", data: user }
    }

    public async update(data:User, userId: string){
        const userExists = await prisma.user.findUnique({
            where:{
                email: data.email
            }
        })

        if(userExists){
            return { status: 401, message: "Email ja cadastrado!", data: null }
        }

        const user = await prisma.user.update({
            where:{
                id: userId
            },
            data:{
                name: data?.name,
                email: data?.email
            }
        })

        return { status: 200, message: 'Usuário atualizado com sucesso!', data: user }
    }

    public async delete(userId:string){
        const user = await prisma.user.delete({
            where:{
                id: userId
            }
        })
        
        return { status: 200, message: 'Usuário deletado com sucesso!', data: user }
    }
}

export default new UserRepository()