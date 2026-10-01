import { Controller, Get, Body, Post, Put, Delete } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';

@Controller()
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) { }

  @Get('/listVehicles')
  async getVehicles() {
    let vehicles = this.vehiclesService.getVehicles();
    let response = {};
    if (vehicles != null) {
      response = {
        statusCode: 200,
        message: 'Vehículos obtenidos exitosamente',
        data: await vehicles
      };
    } else {
      response = {
        statusCode: 404,
        message: 'Vehículos no encontrado',
        data: null
      };
    }
    return response;
  }

  @Post('/findVehicle')
  async findVehicle(@Body() vehicleData: { vehicleId: number }) {
    let vehicle = await this.vehiclesService.findVehicle(vehicleData.vehicleId);
    let response = {};
    if (vehicle?.id != null) {
      response = {
        statusCode: 200,
        message: 'Vehículo obtenido exitosamente',
        data: vehicle
      };
    } else {
      response = {
        statusCode: 404,
        message: 'Vehículo no encontrado',
        data: null
      };
    }
    return response;
  }

  @Post('/addVehicle')
  async addVehicles(@Body() vehicleData: {
    userId: number;
    brandId: number;
    vehicleTypeId: number;
    modelId: number;
    year: number;
    parkingNumber: number;
  }): Promise<any> {
    let addVehicle = this.vehiclesService.addVehicles(
      vehicleData.userId,
      vehicleData.brandId,
      vehicleData.vehicleTypeId,
      vehicleData.modelId,
      vehicleData.year,
      vehicleData.parkingNumber
    );

    let response = {
      statusCode: 200,
      message: 'Vehículo agregado exitosamente',
      data: await addVehicle
    };
    return response;
  }

  @Put('/editVehicle')
  async editVehicle(@Body() vehicleData: {
    vehicleId: number;
    userId: number;
    brandId: number;
    vehicleTypeId: number;
    modelId: number;
    year: number;
    parkingNumber: number;
  }): Promise<any> {
    let editedVehicle = await this.vehiclesService.editVehicle(
      vehicleData.vehicleId,
      vehicleData.userId,
      vehicleData.brandId,
      vehicleData.vehicleTypeId,
      vehicleData.modelId,
      vehicleData.year,
      vehicleData.parkingNumber
    );

    let response = {};
    if (editedVehicle) {
      response = {
        statusCode: 200,
        message: 'Vehículo editado exitosamente',
        data: editedVehicle
      };
    } else {
      response = {
        statusCode: 404,
        message: 'Vehículo no encontrado',
        data: null
      };
    }
    return response;
  }

  @Delete('/deleteVehicle')
  async deleteVehicle(@Body() vehicleData: { vehicleId: number }): Promise<any> {
    let result = await this.vehiclesService.deleteVehicle(vehicleData.vehicleId);

    let response = {};
    if (result) {
      response = {
        statusCode: 200,
        message: 'Vehículo eliminado exitosamente',
        data: null
      };
    } else {
      response = {
        statusCode: 404,
        message: 'Vehículo no encontrado',
        data: null
      };
    }
    return response;
  }
}
