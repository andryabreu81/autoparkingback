import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Login } from './login.entity';


@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(Login)
    private readonly loginRepository: Repository<Login>,
  ) { }

  // Metodo para iniciar sesion
  async login(login: string, password: string): Promise<Login | null> {
    return await this.loginRepository.findOne({
      where: { login, password }
    });
  }
}
