import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Brand } from './brands.entity';

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brand)
    private readonly brandRepository: Repository<Brand>,
  ) {}

  async getBrands(): Promise<Brand[]> {
    // Retorna solo las marcas activas, por ejemplo, si tienes un campo 'active' en tu entidad Brand
    return await this.brandRepository.find({
      where: { active: 1 },
      order: { brandName: 'ASC' }
    });
  }
}
