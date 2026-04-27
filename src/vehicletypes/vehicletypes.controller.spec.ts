import { Test, TestingModule } from '@nestjs/testing';
import { VehicletypesController } from './vehicletypes.controller';
import { VehicletypesService } from './vehicletypes.service';

describe('VehicletypesController', () => {
  let controller: VehicletypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehicletypesController],
      providers: [VehicletypesService],
    }).compile();

    controller = module.get<VehicletypesController>(VehicletypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
