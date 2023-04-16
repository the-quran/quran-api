import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';

export type ChapterDocument = HydratedDocument<Chapter>;

@Schema()
export class Chapter {
  @Prop({ required: true, index: true, unique: true, type: SchemaTypes.Number })
  id: number;
  @Prop({ type: SchemaTypes.String })
  revelationPlace: string;
  @Prop({ type: SchemaTypes.Number })
  revelationOrder: number;
  @Prop({ type: SchemaTypes.Boolean })
  bismillahPre: boolean;
  @Prop({ type: SchemaTypes.String })
  nameSimple: string;
  @Prop({ type: SchemaTypes.String })
  nameComplex: string;
  @Prop({ type: SchemaTypes.String })
  nameArabic: string;
  @Prop({ type: SchemaTypes.Number })
  versesCount: number;
  @Prop({ type: [SchemaTypes.Number] })
  pages: number[];
  @Prop({
    type: [
      {
        isoCode: { type: SchemaTypes.String },
        name: { type: SchemaTypes.String },
      },
    ],
  })
  translatedName: {
    isoCode: string;
    name: string;
  }[];
  // @Prop({
  //   type: [
  //     { id: { type: SchemaTypes.Number }, text: { type: SchemaTypes.String } },
  //   ],
  // })
  // translations: { id: number; text: string }[];
}

export const ChapterSchema = SchemaFactory.createForClass(Chapter);
