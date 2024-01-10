import { Router } from "express";

const routes = Router()

import UserRoutes from "./user/user.routes"


new UserRoutes(routes)

export {routes}