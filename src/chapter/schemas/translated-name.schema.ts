import { AutoMap } from '@automapper/classes';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';

export type TranslatedNameDocument = HydratedDocument<TranslatedName>;

@Schema()
export class TranslatedName {
  @AutoMap()
  @Prop({ type: SchemaTypes.String })
  _id: string;

  @AutoMap()
  @Prop({ type: SchemaTypes.String })
  name: string;
}

export const TranslatedNameSchema =
  SchemaFactory.createForClass(TranslatedName);
