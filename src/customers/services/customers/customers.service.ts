import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      email: '1@gmail.com',
      name: 'Danny',
    },
    {
      id: 2,
      email: '2@gmail.com',
      name: 'Adam',
    },
    {
      id: 3,
      email: '3@gmail.com',
      name: 'Spencer',
    },
  ];

  findCustomerById(id: number) {
    return this.customers.find((user) => user.id === id);
  }

  createCustomer(customerDto: CreateCustomerDto) {
    this.customers.push(customerDto);
  }

  getAllCustomers() {
    return this.customers;
  }
}
