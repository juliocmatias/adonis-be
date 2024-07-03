import router from '@adonisjs/core/services/router'
const SaleController = () => import('#controllers/sale_controller')
import { middleware } from '#start/kernel'

router
  .resource('sale', SaleController)
  .apiOnly()
  .only(['index', 'store', 'destroy'])
  .where('id', router.matchers.number())
  .use('*', middleware.tokenValidation())
