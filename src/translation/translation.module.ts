import { Module } from '@nestjs/common';
import { TranslationService } from './translation.service';
import { TranslationResolver } from './translation.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Translation, TranslationSchema } from './schemas/translation.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Translation.name, schema: TranslationSchema },
    ]),
  ],
  providers: [TranslationResolver, TranslationService],
})
export class TranslationModule {}
