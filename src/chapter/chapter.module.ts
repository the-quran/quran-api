import { Module } from '@nestjs/common';
import { ChapterService } from './chapter.service';
import { ChapterResolver } from './chapter.resolver';
import { Chapter } from './entities/chapter.entity';
import { ChapterSchema } from './schemas/chapter.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Chapter.name, schema: ChapterSchema }]),
  ],
  providers: [ChapterResolver, ChapterService],
})
export class ChapterModule {}
