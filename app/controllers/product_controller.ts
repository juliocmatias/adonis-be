import type { HttpContext } from '@adonisjs/core/http'
import mapStatusHTTP from '../utils/map_status_http.js'
import ProductService from '#services/product_service'

export default class ProductController {
  constructor(private productService = new ProductService()) {}

  async index({ request, response }: HttpContext) {
    const { all, deleted } = request.qs()
    const { status, data } = await this.productService.index(all, deleted)
    return response.status(mapStatusHTTP(status)).json(data)
  }

  async store({ request, response }: HttpContext) {
    const { name, quantity, price } = request.all()
    const { status, data } = await this.productService.store(
      name,
      Number.parseInt(quantity),
      Number.parseFloat(price)
    )
    return response.status(mapStatusHTTP(status)).json(data)
  }

  async show({ params, response }: HttpContext) {
    const { id } = params

    const { status, data } = await this.productService.show(id)
    return response.status(mapStatusHTTP(status)).json(data)
  }

  async update({ params, request, response }: HttpContext) {
    const { id } = params

    const { name, quantity, price } = request.all()
    const { status, data } = await this.productService.update(
      id,
      name,
      Number.parseInt(quantity),
      Number.parseFloat(price)
    )
    return response.status(mapStatusHTTP(status)).json(data)
  }

  async destroy({ params, response }: HttpContext) {
    const { id } = params

    const { status, data } = await this.productService.destroy(id)
    return response.status(mapStatusHTTP(status)).json(data)
  }
}
