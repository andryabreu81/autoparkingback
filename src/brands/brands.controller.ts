import { Controller, Get, Post, Put, Delete, Patch, Req, Res, Body } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { Response } from 'express';

@Controller()
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Get('/brands')
  async getBrands() {
    let brands = this.brandsService.getBrands();

    let response = {
      statusCode: 200,
      message: 'Marcas obtenidas exitosamente',
      data: await brands
    };
    
    return response;
  }
}
