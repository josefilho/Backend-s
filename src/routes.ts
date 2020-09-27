import { Router, IRouter } from 'express'

const routes: IRouter = Router()

routes.get('/', (req, res) => res.json({
  ok: true
}))

export default routes
