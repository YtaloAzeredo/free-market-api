import { auth } from './auth.middleware'
import { corsMiddleware } from './cors.middleware'

export const middlewares = [
  auth,
  corsMiddleware
]
