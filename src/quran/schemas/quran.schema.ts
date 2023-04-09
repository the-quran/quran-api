import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type QuranDocument = HydratedDocument<Quran>;

@Schema()
export class Quran {
  @Prop()
  name: string;
}

export const QuranSchema = SchemaFactory.createForClass(Quran);
