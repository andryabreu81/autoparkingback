import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async addUsers(
    name: string, 
    email: string, 
    lastname: string, 
    roleId: number, 
    identificationId : number, 
    phoneNumber: number, 
    aptoNumber: string, 
    floor: number, 
    leader: string,
    login: string,
    password:string): Promise<User> {

    const newUser = this.usersRepository.create({ name, email, lastname, roleId, identificationId, phoneNumber, aptoNumber, floor, leader, login, password });

    return await this.usersRepository.save(newUser);
  }
}
