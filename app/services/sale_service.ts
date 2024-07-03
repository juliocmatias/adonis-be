import { ServiceResponse } from '../interfaces/service_response.js'
import Sale from '#models/sale'

export default class SaleService {
  constructor(private saleModel = Sale) {}

  async index(): Promise<ServiceResponse<Sale[]>> {
    try {
      const sales = await this.saleModel
        .query()
        .preload('client')
        .preload('product')
        .orderBy('id', 'asc')
        .exec()

      return { status: 'SUCCESSFUL', data: sales }
    } catch (error) {
      return this.handleError(error)
    }
  }

  private handleError(error: any): ServiceResponse<any> {
    const message = error instanceof Error ? error.message : 'Unknown error occurred'
    return { status: 'INTERNAL_SERVER_ERROR', data: { message } }
  }
}
