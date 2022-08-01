import express from 'express'
import 'reflect-metadata'
import './bootstrap'
import './database'
import { routes } from './router'

const port = process.env.PORT

function startpApp (): void {
  const app = express()
  app.use(express.json())
  routes.map((route) => app.use(route))
  app.listen(port)
  console.log(`----------------Server running on port ${port}----------------`)
}

startpApp()
