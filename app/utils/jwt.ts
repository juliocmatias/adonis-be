import jwt from 'jsonwebtoken'

export default abstract class Jwt {
  private static secret: jwt.Secret = process.env.JWT_SECRET || 'secret'

  private static jwtConfig: jwt.SignOptions = {
    expiresIn: '10d',
    algorithm: 'HS256',
  }

  static sign(payload: jwt.JwtPayload): string {
    return jwt.sign({ ...payload }, this.secret, this.jwtConfig)
  }

  static verify(token: string): jwt.JwtPayload | string {
    try {
      return jwt.verify(token, this.secret) as jwt.JwtPayload
    } catch (error) {
      return 'Token must be a valid token'
    }
  }
}
