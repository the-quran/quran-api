import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Translation } from './translation.schema';

export type VerseDocument = HydratedDocument<Verse>;

@Schema()
export class Verse {
  @Prop()
  _id: number;
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
  translations: Translation[];
}

export const VerseSchema = SchemaFactory.createForClass(Verse);
