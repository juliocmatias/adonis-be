import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import Jwt from '../utils/jwt.js'

export default class TokenValidationMiddleware {
  constructor(private jwtService = Jwt) {}

  async handle(ctx: HttpContext, next: NextFn) {
    const { authorization } = ctx.request.headers()

    if (!authorization) {
      return ctx.response.status(401).json({ message: 'Token not provided' })
    }

    const token = TokenValidationMiddleware.extractBearerToken(authorization)
    const payload = this.jwtService.verify(token)

    if (payload === 'Token must be a valid token') {
      return ctx.response.status(401).json({ message: payload })
    }

    const output = await next()
    return output
  }

  private static extractBearerToken(authorization: string): string {
    return authorization.split(' ')[1]
  }
}
