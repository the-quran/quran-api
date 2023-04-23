import { AutoMap } from '@automapper/classes';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Translation } from './translation.schema';

export type VerseDocument = HydratedDocument<Verse>;

@Schema()
export class Verse {
  @AutoMap()
  @Prop()
  _id: number;
  @AutoMap()
  @Prop()
  verse: number;
  @AutoMap()
  @Prop()
  chapter: number;
  @AutoMap()
  @Prop()
  hizb: number;
  @AutoMap()
  @Prop()
  rub: number;
  @AutoMap()
  @Prop()
  ruku: number;
  @AutoMap()
  @Prop()
  manzil: number;
  @AutoMap()
  @Prop()
  sajdah: number;
  @AutoMap()
  @Prop()
  page: number;
  @AutoMap()
  @Prop()
  juz: number;
  @AutoMap()
  @Prop(String)
  text: string;
  @AutoMap(() => [Translation])
  @Prop()
  translations: Translation[];
}

export const VerseSchema = SchemaFactory.createForClass(Verse);
