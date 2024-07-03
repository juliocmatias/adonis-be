import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class ClientValidationMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    const { name, taxId } = ctx.request.all()

    if (name && name.length < 3) {
      return ctx.response.status(400).json({ message: 'Name must be at least 3 characters' })
    }

    if (taxId && taxId.length !== 11) {
      return ctx.response.status(400).json({ message: 'TaxId must have 11 characters' })
    }

    const output = await next()
    return output
  }
}
