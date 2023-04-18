import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';

export type TranslationInfoDocument = HydratedDocument<TranslationInfo>;

@Schema()
export class Author {
  @Prop({ type: SchemaTypes.Number })
  _id: number;
  @Prop({ type: SchemaTypes.String })
  name: string;
}

@Schema()
export class TranslationInfo {
  @Prop({ type: SchemaTypes.Number })
  _id: number;

  @Prop({ type: SchemaTypes.String })
  name: string;

  @Prop({ type: SchemaTypes.String })
  isoCode: string;

  @Prop({ type: SchemaTypes.String })
  nativeName: string;

  @Prop({ type: SchemaTypes.String })
  direction: string;

  @Prop()
  authors: Author[];
}

export const TranslationInfoSchema =
  SchemaFactory.createForClass(TranslationInfo);
