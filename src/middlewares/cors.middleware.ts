import cors from 'cors'
import { NextFunction, Request, Response } from 'express'

export const corsMiddleware = (req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  // res.setHeader('Access-Control-Allow-Credentials', true)
  // cors({
  //   origin: true,
  //   credentials: false,
  //   preflightContinue: false,
  //   exposedHeaders: '*',
  //   methods: ['GET', 'POST']
  // })
  next()
}
