import { Module } from '@nestjs/common';
import { QuranService } from './quran.service';
import { QuranResolver } from './quran.resolver';

import { Quran, QuranSchema } from './schemas/quran.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Quran.name, schema: QuranSchema }]),
  ],
  providers: [QuranResolver, QuranService],
})
export class QuranModule {}
