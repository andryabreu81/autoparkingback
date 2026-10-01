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

  @Post('/findbrand')
  async findBrand(@Body() brandData: { brandId: number }) {
    
    let brand = await this.brandsService.findBrand(brandData.brandId);

    let response = {};

    if (brand?.id != null) {
     
        response = {
          statusCode: 200,
          message: 'Marca obtenida exitosamente',
          data: await brand
        };
    }else{
          response = {
          statusCode: 404,
          message: 'Marca no encontrada',
          data: null
        };
    }

    return response;
  }

  @Post('/addbrands')
  async addBrands(@Body() brandData: { 
    brandCode: string; 
    brandName: string; 
    vehicleTypeId: number }): Promise<any> {

    let addBrand = this.brandsService.addBrands(brandData.brandCode, brandData.brandName, brandData.vehicleTypeId);

    let response = {
      statusCode: 200,
      message: 'Marca agregada exitosamente',
      data: await addBrand
    };

    return response;
  }

  @Put('/editbrand')
  async editBrand(@Body() brandData: { 
    brandId: number;
    brandCode: string; 
    brandName: string; 
    vehicleTypeId: number 
  }): Promise<any> {
    let editedBrand = await this.brandsService.editBrand(
      brandData.brandId,
      brandData.brandCode,
      brandData.brandName,
      brandData.vehicleTypeId
    );

    let response = {};
    if (editedBrand) {
      response = {
        statusCode: 200,
        message: 'Marca editada exitosamente',
        data: editedBrand
      };
    } else {
      response = {
        statusCode: 404,
        message: 'Marca no encontrada',
        data: null
      };
    }
    return response;
  }

  @Delete('/deletebrand')
  async deleteBrand(@Body() brandData: { brandId: number }): Promise<any> {
    let result = await this.brandsService.deleteBrand(brandData.brandId);

    let response = {};
    if (result) {
      response = {
        statusCode: 200,
        message: 'Marca eliminada exitosamente',
        data: null
      };
    } else {
      response = {
        statusCode: 404,
        message: 'Marca no encontrada',
        data: null
      };
    }
    return response;
  }
}
