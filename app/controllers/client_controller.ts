import type { HttpContext } from '@adonisjs/core/http'
import mapStatusHTTP from '../utils/map_status_http.js'
import ClientService from '#services/client_service'
import ClientRequest from '../interfaces/clients/client_request.js'
import ClientRequestUpdate from '../interfaces/clients/client_req_upadate.js'

export default class ClientController {
  constructor(private clientService = new ClientService()) {}

  async index({ response }: HttpContext) {
    const { status, data } = await this.clientService.index()
    return response.status(mapStatusHTTP(status)).json(data)
  }

  async store({ request, response }: HttpContext) {
    const client = request.all() as ClientRequest
    const { status, data } = await this.clientService.store(client)
    return response.status(mapStatusHTTP(status)).json(data)
  }

  // async show({ params }: HttpContext) {}

  async update({ params, request, response }: HttpContext) {
    const { id } = params
    const client = request.all() as ClientRequestUpdate
    const { status, data } = await this.clientService.update(id, client)
    return response.status(mapStatusHTTP(status)).json(data)
  }

  // async destroy({ params }: HttpContext) {}
}
