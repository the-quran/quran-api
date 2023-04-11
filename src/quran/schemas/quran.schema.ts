import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type QuranDocument = HydratedDocument<Quran>;

@Schema()
export class Translation {
  @Prop()
  text: string;
  @Prop()
  iso_code: string;
}

@Schema()
export class Quran {
  @Prop()
  verse_id: number;
  @Prop()
  verse: number;
  @Prop()
  chapter: number;
  @Prop()
  hizb: number;
  @Prop()
  rub: number;
  @Prop()
  ruku: number;
  @Prop()
  manzil: number;
  @Prop()
  sajdah: number;
  @Prop()
  page: number;
  @Prop()
  juz: number;
  @Prop(String)
  text: string;
  @Prop(String)
  translation: Translation;
}

export const QuranSchema = SchemaFactory.createForClass(Quran);
