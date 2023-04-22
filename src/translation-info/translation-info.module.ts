import { Module } from '@nestjs/common';
import { TranslationInfoService } from './translation-info.service';
import { TranslationInfoResolver } from './translation-info.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import {
  TranslationInfo,
  TranslationInfoSchema,
} from './schemas/translation-info.schema';
import { TranslationInfoProfile } from './profiles/translation-info-profile';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TranslationInfo.name, schema: TranslationInfoSchema },
    ]),
  ],
  providers: [
    TranslationInfoResolver,
    TranslationInfoService,
    TranslationInfoProfile,
  ],
})
export class TranslationInfoModule {}
