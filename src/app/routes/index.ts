import { Router } from "express";

const routes = Router()

import UserRoutes from './user/user.routes'
import UserAuth from './auth/auth.routes'
import ProductRoutes from './product/product.routes'


new UserRoutes(routes)
new UserAuth(routes)
new ProductRoutes(routes)

export {routes}