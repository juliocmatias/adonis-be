import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class SaleValidationMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    const { clientId, productId, quantity } = ctx.request.all()

    if (!clientId || !productId || !quantity) {
      return ctx.response.badRequest({ message: 'Client, product, and quantity are required' })
    }

    if (
      typeof clientId !== 'number' ||
      typeof productId !== 'number' ||
      typeof quantity !== 'number'
    ) {
      return ctx.response.badRequest({ message: 'Client, product, and quantity must be numbers' })
    }

    const output = await next()
    return output
  }
}
