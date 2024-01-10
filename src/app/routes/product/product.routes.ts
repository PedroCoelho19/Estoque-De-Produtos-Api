import { productController } from "../../controllers";

export default class ProductRoutes {
  constructor(router){
    this.initDefineRoutes(router);
  }
  
  private initDefineRoutes(router){
    router.post('/product/create', productController.create)
  }
}