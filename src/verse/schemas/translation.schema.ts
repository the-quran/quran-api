import { AutoMap } from '@automapper/classes';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TranslationDocument = HydratedDocument<Translation>;

@Schema()
export class Translation {
  @AutoMap()
  @Prop()
  _id: number;
  @AutoMap()
  @Prop()
  text: string;
}

export const TranslationSchema = SchemaFactory.createForClass(Translation);
