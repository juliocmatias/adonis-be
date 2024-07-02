import router from '@adonisjs/core/services/router'
const UsersController = () => import('#controllers/user_controller')
import { middleware } from '#start/kernel'

router
  .resource('user', UsersController)
  .apiOnly()
  .only(['store', 'update'])
  .where('id', router.matchers.number())
  .use(['store', 'update'], middleware.userValidation())
  .use(['update'], middleware.tokenValidation())
