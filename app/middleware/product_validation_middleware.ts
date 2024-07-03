import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class ProductValidationMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    const { name, quantity, price } = ctx.request.all()

    if (name && (name.length < 3 || name.length > 30)) {
      return ctx.response.status(400).json({ message: 'Name must be between 3 and 30 characters' })
    }

    if (quantity && typeof quantity !== 'number') {
      return ctx.response.status(400).json({ message: 'Quantity must be a number' })
    }

    if (price && typeof price !== 'number') {
      return ctx.response.status(400).json({ message: 'Price must be a number' })
    }

    const output = await next()
    return output
  }
}
