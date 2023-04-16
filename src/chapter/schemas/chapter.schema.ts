import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ChapterDocument = HydratedDocument<Chapter>;

@Schema()
export class Chapter {
  @Prop()
  _id: number;
  @Prop()
  revelationPlace: string;
  @Prop()
  revelationOrder: number;
  @Prop()
  bismillahPre: boolean;
  @Prop()
  nameSimple: string;
  @Prop()
  nameComplex: string;
  @Prop()
  nameArabic: string;
  @Prop()
  versesCount: number;
}

export const ChapterSchema = SchemaFactory.createForClass(Chapter);
