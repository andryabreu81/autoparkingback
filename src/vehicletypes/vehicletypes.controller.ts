import { Controller, Get, Body, Post, Put, Delete } from '@nestjs/common';
import { VehicletypesService } from './vehicletypes.service';

@Controller()
export class VehicletypesController {
  constructor(private readonly vehicletypesService: VehicletypesService) { }

  @Get('/listVehicleTypes')
  async getVehicleTypes() {
    let vehicleTypes = await this.vehicletypesService.getVehicleTypes();
    let response = {};
    if (vehicleTypes != null) {
      response = {
        statusCode: 200,
        message: 'Tipos de vehículos obtenidos exitosamente',
        data: vehicleTypes
      };
    } else {
      response = {
        statusCode: 404,
        message: 'Tipos de vehículos no encontrados',
        data: null
      };
    }
    return response;
  }

  @Post('/findVehicleType')
  async findVehicleType(@Body() data: { vehicleTypeId: number }) {
    let vehicleType = await this.vehicletypesService.findVehicleType(data.vehicleTypeId);
    let response = {};
    if (vehicleType?.id != null) {
      response = {
        statusCode: 200,
        message: 'Tipo de vehículo obtenido exitosamente',
        data: vehicleType
      };
    } else {
      response = {
        statusCode: 404,
        message: 'Tipo de vehículo no encontrado',
        data: null
      };
    }
    return response;
  }

  @Post('/addVehicleType')
  async addVehicleType(@Body() data: {
    vehicleTypesCode: string;
    vehicleTypesName: string;
  }): Promise<any> {
    let addVehicleType = await this.vehicletypesService.addVehicleType(
      data.vehicleTypesCode,
      data.vehicleTypesName
    );

    let response = {
      statusCode: 200,
      message: 'Tipo de vehículo agregado exitosamente',
      data: addVehicleType
    };
    return response;
  }

  @Put('/editVehicleType')
  async editVehicleType(@Body() data: {
    vehicleTypeId: number;
    vehicleTypesCode: string;
    vehicleTypesName: string;
  }): Promise<any> {
    let editedVehicleType = await this.vehicletypesService.editVehicleType(
      data.vehicleTypeId,
      data.vehicleTypesCode,
      data.vehicleTypesName
    );

    let response = {};
    if (editedVehicleType) {
      response = {
        statusCode: 200,
        message: 'Tipo de vehículo editado exitosamente',
        data: editedVehicleType
      };
    } else {
      response = {
        statusCode: 404,
        message: 'Tipo de vehículo no encontrado',
        data: null
      };
    }
    return response;
  }

  @Delete('/deleteVehicleType')
  async deleteVehicleType(@Body() data: { vehicleTypeId: number }): Promise<any> {
    let result = await this.vehicletypesService.deleteVehicleType(data.vehicleTypeId);

    let response = {};
    if (result) {
      response = {
        statusCode: 200,
        message: 'Tipo de vehículo eliminado exitosamente',
        data: null
      };
    } else {
      response = {
        statusCode: 404,
        message: 'Tipo de vehículo no encontrado',
        data: null
      };
    }
    return response;
  }
}
