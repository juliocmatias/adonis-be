import router from '@adonisjs/core/services/router'
const ClientController = () => import('#controllers/client_controller')
import { middleware } from '#start/kernel'

router
  .group(() => {
    router.get('/', [ClientController, 'index']).use(middleware.tokenValidation())
    router
      .get('/:clientId/sales', [ClientController, 'show'])
      .where('clientId', router.matchers.number())
      .use(middleware.tokenValidation())
    router
      .post('/', [ClientController, 'store'])
      .use([middleware.tokenValidation(), middleware.clientValidation()])
    router
      .put('/:id', [ClientController, 'update'])
      .where('id', router.matchers.number())
      .use([middleware.tokenValidation(), middleware.clientValidation()])
    router
      .patch('/:id', [ClientController, 'update'])
      .where('id', router.matchers.number())
      .use([middleware.tokenValidation(), middleware.clientValidation()])
    router
      .delete('/:id', [ClientController, 'destroy'])
      .where('id', router.matchers.number())
      .use(middleware.tokenValidation())
  })
  .prefix('client')
