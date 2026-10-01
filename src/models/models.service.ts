import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Model } from './models.entity';

@Injectable()
export class ModelsService {
  constructor(
    @InjectRepository(Model)
    private readonly modelRepository: Repository<Model>,
  ) { }

  //lista de marcas activas ordenadas por nombre
  async getModels(): Promise<Model[]> {
    // Retorna solo las marcas activas, por ejemplo, si tienes un campo 'active' en tu entidad Brand
    return await this.modelRepository.find({
      where: { active: 1 },
      //relations: ['model'],
      order: { modelName: 'ASC' }
    });
  }
}
