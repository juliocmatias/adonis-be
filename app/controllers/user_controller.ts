import UserService from '#services/user_service'
import type { HttpContext } from '@adonisjs/core/http'
import mapStatusHTTP from '../utils/map_status_http.js'

export default class UsersController {
  constructor(private userService = new UserService()) {}

  async store({ request, response }: HttpContext) {
    const { email, password } = request.all()
    const { status, data } = await this.userService.store(email, password)
    return response.status(mapStatusHTTP(status)).json(data)
  }

  async update({ request, response, params }: HttpContext) {
    const { id } = params

    const { email, password } = request.all()
    const { status, data } = await this.userService.update(id, email, password)
    return response.status(mapStatusHTTP(status)).json(data)
  }
}
