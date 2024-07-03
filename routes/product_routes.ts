import router from '@adonisjs/core/services/router'
const ProductController = () => import('#controllers/product_controller')
import { middleware } from '#start/kernel'

router
  .resource('product', ProductController)
  .apiOnly()
  .where('id', router.matchers.number())
  .use('*', middleware.tokenValidation())
  .use(['store', 'update'], middleware.productValidation())
