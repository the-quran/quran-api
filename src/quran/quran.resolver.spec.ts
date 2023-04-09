import { Test, TestingModule } from '@nestjs/testing';
import { QuranResolver } from './quran.resolver';
import { QuranService } from './quran.service';

describe('QuranResolver', () => {
  let resolver: QuranResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuranResolver, QuranService],
    }).compile();

    resolver = module.get<QuranResolver>(QuranResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
