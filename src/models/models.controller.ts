import { Controller, Get } from '@nestjs/common';
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
}
