import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';

export type ChapterDocument = HydratedDocument<Chapter>;

@Schema()
export class Chapter {
  @Prop({ required: true, index: true, unique: true, type: SchemaTypes.Number })
  _id: number;
  @Prop({ required: true, type: SchemaTypes.String })
  revelationPlace: string;
  @Prop({ required: true, type: SchemaTypes.Number })
  revelationOrder: number;
  @Prop({ required: true, type: SchemaTypes.Boolean })
  bismillahPre: boolean;
  @Prop({ required: true, type: SchemaTypes.String })
  nameSimple: string;
  @Prop({ required: true, type: SchemaTypes.String })
  nameComplex: string;
  @Prop({ required: true, type: SchemaTypes.String })
  nameArabic: string;
  @Prop({ required: true, type: SchemaTypes.Number })
  versesCount: number;
  // @Prop({
  //   type: [
  //     { id: { type: SchemaTypes.Number }, text: { type: SchemaTypes.String } },
  //   ],
  // })
  // translations: { id: number; text: string }[];
}

export const ChapterSchema = SchemaFactory.createForClass(Chapter);
