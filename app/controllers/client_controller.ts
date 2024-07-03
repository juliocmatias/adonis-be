import type { HttpContext } from '@adonisjs/core/http'
import mapStatusHTTP from '../utils/map_status_http.js'
import ClientService from '#services/client_service'

export default class ClientController {
  constructor(private clientService = new ClientService()) {}

  async index({ response }: HttpContext) {
    const { status, data } = await this.clientService.index()
    return response.status(mapStatusHTTP(status)).json(data)
  }

  async store({ request, response }: HttpContext) {
    const { name, taxId } = request.all()
    const { status, data } = await this.clientService.store(name, taxId)
    return response.status(mapStatusHTTP(status)).json(data)
  }

  // async show({ params }: HttpContext) {}

  async update({ params, request, response }: HttpContext) {
    const { id } = params
    const { name, taxId } = request.all()
    const { status, data } = await this.clientService.update(id, name, taxId)
    return response.status(mapStatusHTTP(status)).json(data)
  }

  // async destroy({ params }: HttpContext) {}
}
