import router from '@adonisjs/core/services/router'
const ClientController = () => import('#controllers/client_controller')

router.resource('client', ClientController).apiOnly().where('id', router.matchers.number())
