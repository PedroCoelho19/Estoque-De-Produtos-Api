import {  authController} from "../../controllers";

export default class AuthRoutes {
  constructor(router){
    this.initDefineRoutes(router);
  }
  
  private initDefineRoutes(router){
    router.post('/auth/login', authController.login)
  }
}