import 'express-async-errors'
import express from 'express'
import 'reflect-metadata'
import './bootstrap'
import './database'
import { routes } from './routes'
import { middlewares } from './middlewares'
import { errorHandler } from './middlewares/error-handler.middleware'

const port = process.env.PORT

const handleErrorException = () => {
  process.on('uncaughtException', (error, origin) => {
    console.log(`${origin}: ${error}`)
  })

  process.on('unhandledRejection', (error) => {
    console.log(`unhandledRejection: ${error}`)
  })
}

const startpApp = () => {
  const app = express()
  app.use(express.json())
  routes.map((route) => app.use(route))
  middlewares.map((middleware) => app.use(middleware))
  app.listen(port)
  console.log(`----------------Server running on port ${port}----------------`)
  handleErrorException()
  app.use(errorHandler)
}

startpApp()
