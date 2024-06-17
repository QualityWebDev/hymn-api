import { Test, TestingModule } from '@nestjs/testing';
import { HymnController } from './hymn.controller';

describe('HymnController', () => {
  let controller: HymnController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HymnController],
    }).compile();

    controller = module.get<HymnController>(HymnController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
