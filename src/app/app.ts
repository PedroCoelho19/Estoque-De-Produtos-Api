import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
class App {
  public express: express.Application
  
  constructor(){
    this.express = express()
    this.middlewares()
  }

  private middlewares() {
    this.express.use(express.json({ limit: '10mb' }));
    this.express.use(express.json())
    this.express.use(cors())
    this.express.use(morgan('dev'))
  }
}

export default new App().express