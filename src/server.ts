import express from 'express'
import 'reflect-metadata'
import './bootstrap'
import './database'
import { routes } from './router'
import { middlewares } from './middlewares'
import { errorHandler } from './middlewares/ErrorHandler'
import 'express-async-errors'

const port = process.env.PORT

function startpApp (): any {
  const app = express()
  app.use(express.json())
  routes.map((route) => app.use(route))
  middlewares.map((middleware) => app.use(middleware))
  app.listen(port)
  console.log(`----------------Server running on port ${port}----------------`)
  handleErrorException()
  app.use(errorHandler)
}

function handleErrorException () {
  process.on('uncaughtException', (error, origin) => {
    console.log(`${origin}: ${error}`)
  })

  process.on('unhandledRejection', (error) => {
    console.log(`unhandledRejection: ${error}`)
  })
}

startpApp()
