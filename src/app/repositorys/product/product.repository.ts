import { Product } from "../../@types";
import { prisma } from "../../database/prisma";


class ProductRepository{
    async create(data: Product) {
        const productExists = await prisma.product.findUnique({
            where:{
                name: data.name
            }
        })
        if(productExists){
            return { status: 401, message: 'Email ja cadastrado!', data: null };
        }
        const product = await prisma.product.create({
            data: {
                ...data,
                status: 1
            },
        });
        return { status: 201, message: 'Produto criado com sucesso!', data: product };
    }

    public async list() {
        const product = await prisma.product.findMany();
        return { status: 200, message: "OK!", data: product };
      }
    
      public async update(data: Product, productId: string) {
        const userExists = await prisma.product.findUnique({
          where: {
            name: data.name,
          },
        });
        console.log(userExists)
        if (userExists) {
          return { status: 401, message: "Produto ja cadastrado!", data: null };
        }
    
        const user = await prisma.product.update({
          where: {
            id: productId,
          },
          data: {
            name: data?.name,
            amount: data?.amount,
            price: data?.price,
          },
        });
    
        return {
          status: 200,
          message: "Produto atualizado com sucesso!",
          data: user,
        };
      }
    
    //   public async delete(userId: string) {
    //     const user = await prisma.user.delete({
    //       where: {
    //         id: userId,
    //       },
    //     });
    
    //     return {
    //       status: 200,
    //       message: "Usuário deletado com sucesso!",
    //       data: user,
    //     };
    //   }
}

export default new ProductRepository()