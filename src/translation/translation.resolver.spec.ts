import { Test, TestingModule } from '@nestjs/testing';
import { TranslationResolver } from './translation.resolver';
import { TranslationService } from './translation.service';

describe('TranslationResolver', () => {
  let resolver: TranslationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TranslationResolver, TranslationService],
    }).compile();

    resolver = module.get<TranslationResolver>(TranslationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
