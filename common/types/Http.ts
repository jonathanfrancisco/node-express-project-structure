export interface HttpRequest {
  body?: any;
  query?: any;
  params?: any;
  headers?: any;
  cookies?: any;
}

export interface HttpResponse {
  statusCode: HttpStatusCodes;
  body?: any;
}

export enum HttpStatusCodes {
  OK = 200,
  ACCEPTED = 202,
  CREATED = 201,
  NO_CONTENT = 204,
  INTERNAL_SERVER_ERROR = 500,
  SERVICE_NOT_AVAILABLE = 503
}
