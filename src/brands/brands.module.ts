import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brand } from './brands.entity';
import { VehicleType } from '../vehicletypes/vehicletypes.entity';

@Module({
  controllers: [BrandsController],
  providers: [BrandsService],
  imports: [TypeOrmModule.forFeature([Brand, VehicleType])],
  exports: [BrandsService],
})
export class BrandsModule {}
