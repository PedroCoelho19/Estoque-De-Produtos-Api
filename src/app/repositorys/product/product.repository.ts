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
}

export default new ProductRepository()