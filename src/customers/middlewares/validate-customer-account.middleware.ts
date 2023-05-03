import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ValidateCustomerAccountMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { validaccount } = req.headers;
    console.log('this is customer account middleware');
    if (validaccount) {
      next();
    } else {
      res.status(401).send({ error: 'Account is invalid' });
    }
    // console.log('hello, i am inside validateCustomer middleware');
    // const { authorization } = req.headers;
    // if (!authorization)
    //   return res
    //     .status(403)
    //     .send({ error: 'No Authentication Token Provided' });
    // if (authorization === '123') {
    //   next();
    // } else {
    //   return res
    //     .status(403)
    //     .send({ error: 'Invalid Authentication Token Provided' });
    // }
  }
}
