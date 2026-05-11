import { Controller, Get, Body, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //obtener lista de usuarios
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

  // buscar un usuario especifico
  @Post('/findUser')
  async findUser(@Body() brandData: { userId: number }) {
    
    let usuario = await this.usersService.findUser(brandData.userId);

    let response = {};

    if (usuario?.id != null) {
     
        response = {
          statusCode: 200,
          message: 'Usuario obtenido exitosamente',
          data: await usuario
        };
    }else{
          response = {
          statusCode: 404,
          message: 'Usuario no encontrado',
          data: null
        };
    }

    return response;
  }

  // agregar un usuario
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
