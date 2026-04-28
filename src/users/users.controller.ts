import { Controller, Get, Body, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/users')
  async getUsers(): Promise<any> {
    let userList = this.usersService.getUsers();
    
    let response = {
      statusCode: 200,
      message: 'Lista de usuarios obtenida',
      data: await userList
    };

    return response;
  }

  @Post('/addusers')
  async addUsers(@Body() userData: { 
    name: string; 
    email: string; 
    lastname: string; 
    role_id: number ; 
    identification_id:number, 
    phone_number:number, 
    apto_number:string, 
    floor:number, 
    leader:string,
    login:string,
    password:string }): Promise<any> {

    let addUser = this.usersService.addUsers(userData.name, userData.email, userData.lastname, userData.role_id, userData.identification_id, userData.phone_number, userData.apto_number, userData.floor, userData.leader, userData.login, userData.password);

    let response = {
      statusCode: 200,
      message: 'Usuario agregado exitosamente',
      data: await addUser
    };

    return response;
  }

}
