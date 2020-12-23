import { HttpRequest, HttpResponse } from '../../common/types/Http';
import handleErrorToHttp from './handleErrorToHttp';

export default (
  controllerMethod: (httpRequest: HttpRequest) => Promise<HttpResponse>
) => {
  return (httpRequest: HttpRequest) => {
    return controllerMethod(httpRequest).catch(error => {
      const httpError = handleErrorToHttp(error);
      return {
        statusCode: httpError.statusCode,
        body: {
          errorCode: httpError.errorCode,
          errorMessage: httpError.errorMessage
        }
      };
    });
  };
};
