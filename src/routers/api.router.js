import { Router, json, urlencoded } from 'express'
import { ventasRouter } from './ventas.router.js'
import { errorHandler } from '../middlewares/errors.middleware.js'

export const apiRouter = Router()

apiRouter.use(json())
apiRouter.use(urlencoded({ extended: true }))

apiRouter.use('/ventas', ventasRouter)

apiRouter.use(errorHandler)