import { Module } from '@nestjs/common';
import { VerseService } from './verse.service';
import { VerseResolver } from './verse.resolver';
import { Verse, VerseSchema } from './schemas/verse.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { VerseProfile } from './profiles/verse-profile';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Verse.name, schema: VerseSchema }]),
  ],
  providers: [VerseResolver, VerseService, VerseProfile],
})
export class VerseModule {}
