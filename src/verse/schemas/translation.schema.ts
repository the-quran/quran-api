import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TranslationDocument = HydratedDocument<Translation>;

@Schema()
export class Translation {
  @Prop()
  _id: number;
  @Prop()
  text: string;
}

export const TranslationSchema = SchemaFactory.createForClass(Translation);
