import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ChapterDocument = HydratedDocument<Chapter>;

@Schema()
export class Chapter {
  @Prop()
  id: number;
  @Prop()
  revelation_place: string;
  @Prop()
  revelation_order: number;
  @Prop()
  bismillah_pre: boolean;
  @Prop()
  name_simple: string;
  @Prop()
  name_complex: string;
  @Prop()
  name_arabic: string;
  @Prop()
  verses_count: number;
}

export const ChapterSchema = SchemaFactory.createForClass(Chapter);
