import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  users = [
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
    return this.users.find((user) => user.id === id);
  }
}
