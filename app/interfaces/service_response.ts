export type StatusHttpSuccess = 'SUCCESSFUL' | 'CREATED' | 'NO_CONTENT'

export type StatusHttpError =
  | 'BAD_REQUEST'
  | 'UNAUTHORIZED'
  | 'FORBIDDEN'
  | 'NOT_FOUND'
  | 'CONFLICT'
  | 'INTERNAL_SERVER_ERROR'
  | 'UNPROCESSABLE_ENTITY'

export type ServiceResponseError = {
  status: StatusHttpError
  data: { message: string }
}

export type ServiceResponseSuccess<T> = {
  status: StatusHttpSuccess
  data?: T
}

export type ServiceResponse<T> = ServiceResponseSuccess<T> | ServiceResponseError
