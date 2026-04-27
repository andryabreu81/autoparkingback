import { Controller } from '@nestjs/common';
import { VehicletypesService } from './vehicletypes.service';

@Controller('vehicletypes')
export class VehicletypesController {
  constructor(private readonly vehicletypesService: VehicletypesService) {}
}
