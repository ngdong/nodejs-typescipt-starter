import { IGenerateException } from 'interfaces/exception.interface';
import { Response } from 'express';

export default class ResponseFactory {
  static success<T>(res: Response, data: T, status = 200) {
    res.status(status);
    return res.json({
      status: 'success',
      data: data,
    });
  }

  static successForPaging<T>(
    res: Response,
    data: T,
    totalItems: number,
    limit: number,
    status = 200,
  ) {
    res.status(status);
    return res.json({
      status: 'success',
      data: data,
      limit,
      totalItems,
    });
  }

  static error(res: Response, error: IGenerateException, status = 400) {
    res.status(status);
    return res.json({
      status: 'failed',
      error: {
        message: error.message,
        errors: error.errors,
      },
    });
  }
}
