const LoginController = () => import('#controllers/login_controller')
import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

router
  .resource('login', LoginController)
  .apiOnly()
  .only(['store'])
  .use(['store'], middleware.userValidation())
