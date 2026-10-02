import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller()
export class LoginController {
  constructor(private readonly loginService: LoginService) { }

  // Metodo para iniciar sesion
  @Post('/login')
  async login(@Body() loginData: { login: string; password: string }): Promise<any> {
    let login = await this.loginService.login(loginData.login, loginData.password);

    let response = {};

    if (login) {
      response = {
        statusCode: 200,
        message: 'Usuario logueado exitosamente',
        data: login
      };
    } else {
      response = {
        statusCode: 404,
        message: 'Usuario o clave incorrecta. Por favor verifique e intente nuevamente.',
        data: null
      };
    }
    return response;
  }

}
