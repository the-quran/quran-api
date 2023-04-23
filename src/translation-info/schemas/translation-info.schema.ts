import { AutoMap } from '@automapper/classes';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';
import { Author } from './author.schema';

export type TranslationInfoDocument = HydratedDocument<TranslationInfo>;

@Schema()
export class TranslationInfo {
  @AutoMap()
  @Prop({ type: SchemaTypes.Number })
  _id: number;

  @AutoMap()
  @Prop({ type: SchemaTypes.String })
  name: string;

  @AutoMap()
  @Prop({ type: SchemaTypes.String })
  isoCode: string;

  @AutoMap()
  @Prop({ type: SchemaTypes.String })
  nativeName: string;

  @AutoMap()
  @Prop({ type: SchemaTypes.String })
  direction: string;

  @AutoMap(() => [Author])
  @Prop()
  authors: Author[];
}

export const TranslationInfoSchema =
  SchemaFactory.createForClass(TranslationInfo);
