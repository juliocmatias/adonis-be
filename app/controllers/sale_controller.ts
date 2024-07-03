import type { HttpContext } from '@adonisjs/core/http'
import mapStatusHTTP from '../utils/map_status_http.js'
import SaleService from '#services/sale_service'

export default class SalesController {
  constructor(private saleService = new SaleService()) {}

  async index({ response }: HttpContext) {
    const { status, data } = await this.saleService.index()

    return response.status(mapStatusHTTP(status)).json(data)
  }

  async store({ request }: HttpContext) {}

  async destroy({ params }: HttpContext) {}
}
