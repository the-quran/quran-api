import { Module } from '@nestjs/common';
import { QuranService } from './quran.service';
import { QuranResolver } from './quran.resolver';

@Module({
  providers: [QuranResolver, QuranService]
})
export class QuranModule {}
