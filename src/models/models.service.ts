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

  // Obtener un modelo por su ID
  async findModel(modelId: number): Promise<Model | null> {

    return await this.modelRepository.findOne({
      where: { id: modelId },
      relations: ['vehicletype']
    });

  }

  // Agregar un nuevo modelo
  async addModels(modelName: string, modelCode: string, vehicleTypeId: number): Promise<Model> {
    const newModel = this.modelRepository.create({ modelName, modelCode, vehicleTypeId });

    return await this.modelRepository.save(newModel);
  }
}
