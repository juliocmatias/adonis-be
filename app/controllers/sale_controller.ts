import type { HttpContext } from '@adonisjs/core/http'
import mapStatusHTTP from '../utils/map_status_http.js'
import SaleService from '#services/sale_service'

export default class SalesController {
  constructor(private saleService = new SaleService()) {}

  async index({ response }: HttpContext) {
    const { status, data } = await this.saleService.index()

    return response.status(mapStatusHTTP(status)).json(data)
  }

  async store({ request, response }: HttpContext) {
    const { clientId, productId, quantity, date } = request.all()
    const { status, data } = await this.saleService.store(
      Number.parseInt(clientId),
      Number.parseInt(productId),
      Number.parseInt(quantity),
      date
    )

    return response.status(mapStatusHTTP(status)).json(data)
  }

  async destroy({ params, response }: HttpContext) {
    const { id } = params
    const { status, data } = await this.saleService.destroy(Number.parseInt(id))

    return response.status(mapStatusHTTP(status)).json(data)
  }
}
