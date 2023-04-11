import { Test, TestingModule } from '@nestjs/testing';
import { VerseResolver } from './verse.resolver';
import { VerseService } from './verse.service';

describe('VerseResolver', () => {
  let resolver: VerseResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VerseResolver, VerseService],
    }).compile();

    resolver = module.get<VerseResolver>(VerseResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
