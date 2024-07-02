import LoginService from '#services/login_service'
import type { HttpContext } from '@adonisjs/core/http'
import mapStatusHTTP from '../utils/map_status_http.js'

export default class LoginController {
  constructor(private loginService = new LoginService()) {}

  async store({ request, response }: HttpContext) {
    const { email, password } = request.all()
    const { status, data } = await this.loginService.store(email, password)
    return response.status(mapStatusHTTP(status)).json(data)
  }
}
