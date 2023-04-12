import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TranslationDocument = HydratedDocument<Translation>;

@Schema()
export class Author {
  @Prop()
  _id: number;
  @Prop()
  name: string;
}

@Schema()
export class Translation {
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

export const TranslationSchema = SchemaFactory.createForClass(Translation);
