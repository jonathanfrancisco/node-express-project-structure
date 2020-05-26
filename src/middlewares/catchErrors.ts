import { Request, Response, NextFunction, RequestHandler } from 'express';

const catchErrors = (fn: RequestHandler) => {
  return function(req: Request, res: Response, next: NextFunction) {
    return fn(req, res, next).catch(next);
  };
};

export default catchErrors;
