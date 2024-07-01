import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class UsersMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    const { email, password } = ctx.request.all()

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (email && !emailPattern.test(email)) {
      return ctx.response.status(400).json({ message: 'Invalid email' })
    }

    if (password && password.length < 6) {
      return ctx.response.status(400).json({ message: 'Password must be at least 6 characters' })
    }

    await next()
  }
}
