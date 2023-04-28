import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { CustomersService } from 'src/customers/services/customers/customers.service';
import { Request, Response } from 'express';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}
  @Get(':id')
  getCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    // console.log(typeof id);
    // return this.customersService.findCustomerById();
    const customer = this.customersService.findCustomerById(id);
    if (customer) {
      res.send(customer);
    } else {
      res.status(400).send({ msg: 'customer not founf!' });
    }
  }

  @Get('/search/:id')
  searchCustomerById(@Param('id', ParseIntPipe) id: number) {
    const customer = this.customersService.findCustomerById(id);
    if (customer) return customer;
    else throw new HttpException('Customer Not Found!', HttpStatus.BAD_REQUEST);
  }

  @Post('create')
  createCustomer(@Body() CreateCustomerDto: CreateCustomerDto) {
    console.log(CreateCustomerDto);
  }
}
