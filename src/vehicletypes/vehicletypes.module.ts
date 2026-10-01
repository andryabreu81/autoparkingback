import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicletypesService } from './vehicletypes.service';
import { VehicletypesController } from './vehicletypes.controller';
import { VehicleType } from './vehicletypes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VehicleType])],
  controllers: [VehicletypesController],
  providers: [VehicletypesService],
})
export class VehicletypesModule {}
