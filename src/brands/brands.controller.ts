import { Controller, Get } from '@nestjs/common';
import { BrandsService } from './brands.service';

@Controller()
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Get('/brands')
  getBrands() {
    return this.brandsService.getBrands();
  }
}
