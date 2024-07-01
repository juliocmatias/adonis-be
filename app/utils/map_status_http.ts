import { StatusHttpError, StatusHttpSuccess } from '../interfaces/service_response.js'

enum HttpStatus {
  SUCCESSFUL = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  MULTI_STATUS = 207,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  UNPROCESSABLE_ENTITY = 422,
  INTERNAL_SERVER_ERROR = 500,
}

type StatusKey = StatusHttpSuccess | StatusHttpError

const mapStatusHTTP = (status: StatusKey): number => HttpStatus[status] || 500

export default mapStatusHTTP
