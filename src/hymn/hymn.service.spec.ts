import { Test, TestingModule } from '@nestjs/testing';
import { HymnService } from './hymn.service';

describe('HymnService', () => {
  let service: HymnService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HymnService],
    }).compile();

    service = module.get<HymnService>(HymnService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
