import { AutoMap } from '@automapper/classes';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';

export type ChapterDocument = HydratedDocument<Chapter>;

@Schema()
export class TranslatedName {
  @AutoMap()
  @Prop({ type: SchemaTypes.String })
  isoCode: string;

  @AutoMap()
  @Prop({ type: SchemaTypes.String })
  name: string;
}
@Schema()
export class Chapter {
  @Prop({ type: SchemaTypes.Number })
  _id: number;
  @AutoMap()
  @Prop({ type: SchemaTypes.String })
  revelationPlace: string;
  @AutoMap()
  @Prop({ type: SchemaTypes.Number })
  revelationOrder: number;
  @AutoMap()
  @Prop({ type: SchemaTypes.Boolean })
  bismillahPre: boolean;
  @AutoMap()
  @Prop({ type: SchemaTypes.String })
  nameSimple: string;
  @AutoMap()
  @Prop({ type: SchemaTypes.String })
  nameComplex: string;
  @AutoMap()
  @Prop({ type: SchemaTypes.String })
  nameArabic: string;
  @AutoMap()
  @Prop({ type: SchemaTypes.Number })
  versesCount: number;
  @AutoMap(() => [Number])
  @Prop({ type: [SchemaTypes.Number] })
  pages: number[];
  @AutoMap(() => [TranslatedName])
  @Prop()
  translatedName: TranslatedName[];
  // @Prop({
  //   type: [
  //     { id: { type: SchemaTypes.Number }, text: { type: SchemaTypes.String } },
  //   ],
  // })
  // translations: { id: number; text: string }[];
}

export const ChapterSchema = SchemaFactory.createForClass(Chapter);
