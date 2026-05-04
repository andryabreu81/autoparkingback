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

  @Post('/addbrands')
  async addBrands(@Body() brandData: { brandCode: string; brandName: string; vehicleTypeId: number }): Promise<any> {
    let addBrand = this.brandsService.addBrands(brandData.brandCode, brandData.brandName, brandData.vehicleTypeId);

    let response = {
      statusCode: 200,
      message: 'Marca agregada exitosamente',
      data: await addBrand
    };

    return response;
  }
}
