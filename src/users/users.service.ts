import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

  getGetUsers(): string {
    return 'Lista de usuarios!';
  }

}
