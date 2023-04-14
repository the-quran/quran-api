import { Test, TestingModule } from '@nestjs/testing';
import { TranslationInfoResolver } from './translation-info.resolver';
import { TranslationInfoService } from './translation-info.service';

describe('TranslationInfoResolver', () => {
  let resolver: TranslationInfoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TranslationInfoResolver, TranslationInfoService],
    }).compile();

    resolver = module.get<TranslationInfoResolver>(TranslationInfoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
