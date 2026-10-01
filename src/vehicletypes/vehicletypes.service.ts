import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VehicleType } from './vehicletypes.entity';

@Injectable()
export class VehicletypesService {
  constructor(
    @InjectRepository(VehicleType)
    private readonly vehicletypesRepository: Repository<VehicleType>,
  ) {}

  async getVehicleTypes(): Promise<VehicleType[]> {
    return await this.vehicletypesRepository.find({
      where: { active: 1 }
    });
  }

  async findVehicleType(vehicleTypeId: number): Promise<VehicleType | null> {
    return await this.vehicletypesRepository.findOne({ 
      where: { id: vehicleTypeId }
    });
  }

  async addVehicleType(
    vehicleTypesCode: string, 
    vehicleTypesName: string
  ): Promise<VehicleType> {
    const newVehicleType = this.vehicletypesRepository.create({ vehicleTypesCode, vehicleTypesName });
    return await this.vehicletypesRepository.save(newVehicleType);
  }

  async editVehicleType(
    vehicleTypeId: number,
    vehicleTypesCode: string, 
    vehicleTypesName: string
  ): Promise<VehicleType | null> {
    const updateData: Partial<VehicleType> = { vehicleTypesCode, vehicleTypesName };
    await this.vehicletypesRepository.update(vehicleTypeId, updateData);
    return await this.findVehicleType(vehicleTypeId);
  }

  async deleteVehicleType(vehicleTypeId: number): Promise<boolean> {
    const result = await this.vehicletypesRepository.update(vehicleTypeId, { active: 0 });
    return (result.affected ?? 0) > 0;
  }
}
