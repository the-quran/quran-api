import { AutoMap } from '@automapper/classes';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';

export type AuthorDocument = HydratedDocument<Author>;

@Schema()
export class Author {
  @AutoMap()
  @Prop({ type: SchemaTypes.Number })
  _id: number;
  @AutoMap()
  @Prop({ type: SchemaTypes.String })
  name: string;
}

export const AuthotSchema = SchemaFactory.createForClass(Author);
