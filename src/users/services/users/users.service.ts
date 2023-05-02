import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from 'src/users/types/index';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: 'anson',
      password: 'anson',
    },
    {
      username: 'danny',
      password: 'danny',
    },
    {
      username: 'derek',
      password: 'derek',
    },
    {
      username: 'samantha',
      password: 'samantha',
    },
  ];

  getUsers() {
    return this.users.map((user) => plainToClass(SerializedUser, user));
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
