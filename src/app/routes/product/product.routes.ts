import { productController } from "../../controllers";

export default class ProductRoutes {
  constructor(router){
    this.initDefineRoutes(router);
  }
  
  private initDefineRoutes(router){
    router.get('/product/list', productController.list)
    router.post('/product/create', productController.create)
    router.patch('/product/update/:productId', productController.update)
  }
}