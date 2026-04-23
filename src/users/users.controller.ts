import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { Response, Request} from 'express'

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/users')
    getGetUsers(): string {
      return this.usersService.getGetUsers();
    }

}
