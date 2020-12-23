import express from 'express';
import { HttpRequest } from '../types/Http';

// Parses Express HTTP Request Object to Generic HTTP Request
export default (req: express.Request): HttpRequest => {
  return {
    body: req.body || {},
    headers: req.headers || {},
    params: req.params || {},
    query: req.query || {},
    cookies: req.cookies || {}
  };
};
