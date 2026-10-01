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

  //lista de marcas activas ordenadas por nombre
  async getBrands(): Promise<Brand[]> {
    // Retorna solo las marcas activas, por ejemplo, si tienes un campo 'active' en tu entidad Brand
    return await this.brandRepository.find({
      where: { active: 1 },
      relations: ['vehicletype'],
      order: { brandName: 'ASC' }
    });
  }

  // Obtener una marca por su ID
  async findBrand(brandId: number): Promise<Brand | null> {

    return await this.brandRepository.findOne({ 
      where: { id: brandId },
      relations: ['vehicletype'] 
    });

  }

  // Agregar una nueva marca
  async addBrands(brandCode: string, brandName: string, vehicleTypeId: number): Promise<Brand> {
    const newBrand = this.brandRepository.create({ brandCode, brandName, vehicleTypeId });

    return await this.brandRepository.save(newBrand);
  }

  // Editar una marca
  async editBrand(brandId: number, brandCode: string, brandName: string, vehicleTypeId: number): Promise<Brand | null> {
    const updateData: Partial<Brand> = { brandCode, brandName, vehicleTypeId };
    await this.brandRepository.update(brandId, updateData);
    return await this.findBrand(brandId);
  }

  // Eliminar una marca (lógico)
  async deleteBrand(brandId: number): Promise<boolean> {
    const result = await this.brandRepository.update(brandId, { active: 0 });
    return (result.affected ?? 0) > 0;
  }
}
