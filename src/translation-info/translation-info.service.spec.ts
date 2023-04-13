import { Test, TestingModule } from '@nestjs/testing';
import { TranslationInfoService } from './translation-info.service';

describe('TranslationInfoService', () => {
  let service: TranslationInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TranslationInfoService],
    }).compile();

    service = module.get<TranslationInfoService>(TranslationInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
