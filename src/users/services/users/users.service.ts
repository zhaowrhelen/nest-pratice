import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from 'src/users/types/index';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      username: 'anson',
      password: 'anson',
    },
    {
      id: 2,
      username: 'danny',
      password: 'danny',
    },
    {
      id: 3,
      username: 'derek',
      password: 'derek',
    },
    {
      id: 4,
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

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
