import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehicle } from './vehicles.entity';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicle)
    private readonly vehiclesRepository: Repository<Vehicle>,
  ) {}

  async getVehicles(): Promise<Vehicle[]> {
    return await this.vehiclesRepository.find({
      where: { operative: 1 },
      relations: ['user', 'brand', 'vehicleType']
    });
  }

  async findVehicle(vehicleId: number): Promise<Vehicle | null> {
    return await this.vehiclesRepository.findOne({ 
      where: { id: vehicleId },
      relations: ['user', 'brand', 'vehicleType']
    });
  }

  async addVehicles(
    userId: number, 
    brandId: number, 
    vehicleTypeId: number, 
    modelId: number, 
    year: number, 
    parkingNumber: number
  ): Promise<Vehicle> {
    const newVehicle = this.vehiclesRepository.create({ userId, brandId, vehicleTypeId, modelId, year, parkingNumber });
    return await this.vehiclesRepository.save(newVehicle);
  }

  async editVehicle(
    vehicleId: number,
    userId: number, 
    brandId: number, 
    vehicleTypeId: number, 
    modelId: number, 
    year: number, 
    parkingNumber: number
  ): Promise<Vehicle | null> {
    const updateData: Partial<Vehicle> = { userId, brandId, vehicleTypeId, modelId, year, parkingNumber };
    await this.vehiclesRepository.update(vehicleId, updateData);
    return await this.findVehicle(vehicleId);
  }

  async deleteVehicle(vehicleId: number): Promise<boolean> {
    const result = await this.vehiclesRepository.update(vehicleId, { operative: 0 });
    return (result.affected ?? 0) > 0;
  }
}
