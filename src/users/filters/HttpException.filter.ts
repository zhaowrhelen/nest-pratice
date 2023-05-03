import { HttpException, ArgumentsHost, ExceptionFilter } from '@nestjs/common';

export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    console.log(exception.getResponse());
    console.log(exception.getStatus());
    console.log(exception);

    const context = host.switchToHttp();
    const request = context.getRequest<Request>();
    const response = context.getResponse<Response>();

    // response.sendStatus(exception.getStatus());
    // response.send({
    //   status: exception.getStatus(),
    //   message: exception.getResponse(),
    // });
  }
}
