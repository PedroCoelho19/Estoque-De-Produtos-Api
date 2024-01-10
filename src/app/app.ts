import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import {routes} from  './routes/index'

class App {
  public express: express.Application
  
  constructor(){
    this.express = express()
    this.middlewares()
    this.routes()
  }

  private middlewares() {
    this.express.use(express.json({ limit: '10mb' }));
    this.express.use(express.json())
    this.express.use(cors())
    this.express.use(morgan('dev'))
  }

  private routes(): void{
    this.express.use(routes)
  }
}

export default new App().express