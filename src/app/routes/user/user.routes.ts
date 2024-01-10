import { userController } from "../../controllers";

export default class UserRoutes {
  constructor(router){
    this.initDefineRoutes(router);
  }
  
  private initDefineRoutes(router){
    router.get('/user/list', userController.list)
    router.post('/user/create', userController.create)
    router.patch('/user/update/:userId', userController.update)
    router.delete('/user/delete/:userId', userController.delete)
  }
}