import { Product } from "../../@types";
import { productRepository } from "../../repositorys";
import { Request, Response } from "express";

class ProductController {
  public async create(req: Request, res: Response) {
    try {
      const { name, amount, price }: Product = req.body;
      const data: Product = { name, amount, price };

      const product = await productRepository.create(data);

      res.status(product.status).json({ data: product.data, msg: product.message });
    } catch (error) {
      res.status(400).json(error);
    }
  }
  public async list(req:Request, res:Response){   
    try {
     const product = await productRepository.list()
     res.status(product.status).json({data: product.data , msg: product.message})
    } catch (error) {
     res.status(400).json(error)
    }
 }
 
 public async update(req:Request, res:Response){
     try {
         const { productId } = req.params as { productId: string };
         const { name , amount ,price }: Product = req.body

         const data:Product = {
             name,
             amount,
             price
         }

         const user = await productRepository.update(data ,productId)
         res.status(user.status).json({data: user.data , msg: user.message})
     } catch (error) {
         res.status(400).json(error)
     }
 }

//  public async delete(req:Request, res:Response){
//      try {
//          const { userId } = req.params as { userId: string }; 
//          const user = await productRepository.delete(userId)
//          res.status(user.status).json({data: user.data , msg: user.message})
//      } catch (error) {
//          res.status(400).json(error)
//      }
//  }
}

export default new ProductController()