import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TranslationInfoDocument = HydratedDocument<TranslationInfo>;

@Schema()
export class Author {
  @Prop()
  _id: number;
  @Prop()
  name: string;
}

@Schema()
export class TranslationInfo {
  @Prop()
  _id: number;
  @Prop()
  name: string;
  @Prop()
  iso_code: string;
  @Prop()
  native_name: string;
  @Prop()
  direction: string;
  @Prop()
  authors: Author[];
}

export const TranslationInfoSchema =
  SchemaFactory.createForClass(TranslationInfo);
