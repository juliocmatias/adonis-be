import Product from '#models/product'
import { ServiceResponse } from '../interfaces/service_response.js'

export default class ProductService {
  constructor(private productModel = Product) {}

  async index(all: string, deleted: string): Promise<ServiceResponse<Product[]>> {
    try {
      const productDeleted = deleted === 'true'
      const query = this.productModel.query().orderBy('name', 'asc')
      if (all !== 'true') {
        query.where('deleted', productDeleted)
      }
      const products = await query.exec()

      return { status: 'SUCCESSFUL', data: products }
    } catch (error) {
      return this.handleError(error)
    }
  }

  async store(
    name: string,
    quantity: number,
    price: number
  ): Promise<ServiceResponse<{ id: number }>> {
    try {
      if (!name || !quantity || !price) {
        return this.badRequest('Missing required fields')
      }

      const product = await this.productModel.create({ name, quantity, price })
      return { status: 'CREATED', data: { id: product.id } }
    } catch (error) {
      return this.handleError(error)
    }
  }

  async show(id: number): Promise<ServiceResponse<Product>> {
    try {
      const product = await this.productModel.find(id)
      if (!product) {
        return this.notFound('Product not found')
      }
      return { status: 'SUCCESSFUL', data: product }
    } catch (error) {
      return this.handleError(error)
    }
  }

  async update(
    id: number,
    name?: string,
    quantity?: number,
    price?: number
  ): Promise<ServiceResponse<{ message: string }>> {
    try {
      const product = await this.productModel.find(id)
      if (!product) {
        return this.notFound('Product not found')
      }

      if (name) product.name = name
      if (quantity) product.quantity = quantity
      if (price) product.price = price

      await product.save()
      return { status: 'SUCCESSFUL', data: { message: 'Product updated' } }
    } catch (error) {
      return this.handleError(error)
    }
  }

  async destroy(id: number): Promise<ServiceResponse<{ message: string }>> {
    try {
      const product = await this.productModel.find(id)
      if (!product) {
        return this.notFound('Product not found')
      }

      product.deleted = true
      await product.save()
      return { status: 'SUCCESSFUL', data: { message: 'Product deleted' } }
    } catch (error) {
      return this.handleError(error)
    }
  }

  private handleError(error: unknown): ServiceResponse<any> {
    const message = error instanceof Error ? error.message : 'Unknown error occurred'
    return { status: 'INTERNAL_SERVER_ERROR', data: { message } }
  }

  private notFound(message: string): ServiceResponse<any> {
    return { status: 'NOT_FOUND', data: { message } }
  }

  private badRequest(message: string): ServiceResponse<any> {
    return { status: 'BAD_REQUEST', data: { message } }
  }
}
