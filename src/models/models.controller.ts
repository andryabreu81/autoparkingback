import { Controller, Get, Post, Body } from '@nestjs/common';
import { ModelsService } from './models.service';

@Controller()
export class ModelsController {
  constructor(private readonly modelsService: ModelsService) { }

  @Get('/models')
  async getModels() {
    let models = this.modelsService.getModels();

    let response = {
      statusCode: 200,
      message: 'Modelos obtenidos exitosamente',
      data: await models
    };

    return response;
  }

  // metodo para buscar un modelo expecifico
  @Post('/findmodel')
  async findModel(@Body() modelData: { modelId: number }) {

    let model = await this.modelsService.findModel(modelData.modelId);

    let response = {};

    if (model?.id != null) {

      response = {
        statusCode: 200,
        message: 'Modelo obtenido exitosamente',
        data: await model
      };
    } else {
      response = {
        statusCode: 404,
        message: 'Modelo no encontrado',
        data: null
      };
    }

    return response;
  }

  //metodo para agregar un nuevo modelo
  @Post('/addmodels')
  async addModels(@Body() modelData: {
    modelName: string;
    modelCode: string;
    vehicleTypeId: number;
  }): Promise<any> {

    let addModel = this.modelsService.addModels(modelData.modelName, modelData.modelCode, modelData.vehicleTypeId);

    let response = {
      statusCode: 200,
      message: 'Modelo agregado exitosamente',
      data: await addModel
    };

    return response;
  }
}
