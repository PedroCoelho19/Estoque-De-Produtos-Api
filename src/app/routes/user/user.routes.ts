import { userController } from "../../controllers";

export default class UserRoutes {
  constructor(router){
    this.initDefineRoutes(router);
  }
  
  private initDefineRoutes(router){
    router.post('/user/create', userController.create)
  }
}