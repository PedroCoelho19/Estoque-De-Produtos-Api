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
}

export default new ProductController()