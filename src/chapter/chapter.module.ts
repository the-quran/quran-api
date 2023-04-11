import { Module } from '@nestjs/common';
import { ChapterService } from './chapter.service';
import { ChapterResolver } from './chapter.resolver';

@Module({
  providers: [ChapterResolver, ChapterService]
})
export class ChapterModule {}
