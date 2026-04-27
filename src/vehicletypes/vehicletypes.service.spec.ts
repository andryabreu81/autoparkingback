import { Test, TestingModule } from '@nestjs/testing';
import { VehicletypesService } from './vehicletypes.service';

describe('VehicletypesService', () => {
  let service: VehicletypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehicletypesService],
    }).compile();

    service = module.get<VehicletypesService>(VehicletypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
