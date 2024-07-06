import { ServiceResponse } from '../interfaces/service_response.js'
import Sale from '#models/sale'
import Client from '#models/client'
import Product from '#models/product'
import { DateTime } from 'luxon'

export default class SaleService {
  constructor(
    private saleModel = Sale,
    private clientModel = Client,
    private productModel = Product
  ) {}

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

  async store(
    clientId: number,
    productId: number,
    quantity: number,
    date?: string
  ): Promise<ServiceResponse<Sale>> {
    try {
      const client = await this.clientModel.find(clientId)
      const product = await this.productModel.find(productId)

      if (!client || !product) {
        return { status: 'NOT_FOUND', data: { message: 'Client or product not found' } }
      }

      if (product.quantity < quantity) return this.badRequest('Product quantity is not enough')

      if (product.deleted) return this.badRequest('Product is not available')

      product.quantity -= quantity

      if (product.quantity === 0) {
        product.deleted = true
      }

      await product.save()

      const totalPrice = product.price * quantity

      const saleDate = date ? DateTime.fromISO(date) : DateTime.now()

      if (!saleDate.isValid) {
        return this.badRequest('Invalid date format')
      }

      const sale = await this.saleModel.create({
        clientId,
        productId,
        quantity,
        price: product.price,
        totalPrice,
        date: saleDate.toISO(),
      })

      return { status: 'SUCCESSFUL', data: sale }
    } catch (error) {
      return this.handleError(error)
    }
  }

  async destroy(id: number): Promise<ServiceResponse<{ message: string }>> {
    try {
      const sale = await this.saleModel.find(id)

      if (!sale) {
        return { status: 'NOT_FOUND', data: { message: 'Sale not found' } }
      }

      const product = await this.productModel.find(sale.productId)
      if (product) {
        product.quantity += sale.quantity

        if (product.deleted) {
          product.deleted = false
        }

        await product.save()
      }

      await sale.delete()

      return { status: 'SUCCESSFUL', data: { message: 'Sale deleted' } }
    } catch (error) {
      return this.handleError(error)
    }
  }

  private handleError(error: any): ServiceResponse<any> {
    const message = error instanceof Error ? error.message : 'Unknown error occurred'
    return { status: 'INTERNAL_SERVER_ERROR', data: { message } }
  }

  private badRequest(message: string): ServiceResponse<any> {
    return { status: 'BAD_REQUEST', data: { message } }
  }
}
