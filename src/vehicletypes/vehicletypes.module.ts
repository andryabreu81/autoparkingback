import { Module } from '@nestjs/common';
import { VehicletypesService } from './vehicletypes.service';
import { VehicletypesController } from './vehicletypes.controller';

@Module({
  controllers: [VehicletypesController],
  providers: [VehicletypesService],
})
export class VehicletypesModule {}
