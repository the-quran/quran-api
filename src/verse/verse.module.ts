import { Module } from '@nestjs/common';
import { VerseService } from './verse.service';
import { VerseResolver } from './verse.resolver';
import { Verse, VerseSchema } from './schemas/verse.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Verse.name, schema: VerseSchema }]),
  ],
  providers: [VerseResolver, VerseService],
})
export class VerseModule {}
