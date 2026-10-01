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

  // Obtener un usuario por su ID
  async findUser(userId: number): Promise<User | null> {

    return await this.usersRepository.findOne({ 
      where: { id: userId } 
    });

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

  // Editar un usuario
  async editUser(
    userId: number,
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
    password?: string
  ): Promise<User | null> {
    const updateData: Partial<User> = { name, email, lastname, roleId, identificationId, phoneNumber, aptoNumber, floor, leader, login };
    if (password) {
      updateData.password = password;
    }
    await this.usersRepository.update(userId, updateData);
    return await this.findUser(userId);
  }

  // Eliminar un usuario (lógico)
  async deleteUser(userId: number): Promise<boolean> {
    const result = await this.usersRepository.update(userId, { active: 0 });
    return (result.affected ?? 0) > 0;
  }
}
