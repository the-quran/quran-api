import { AutoMap } from '@automapper/classes';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { TranslatedName } from './translated-name.entity';

@ObjectType()
export class Chapter {
  @AutoMap()
  @Field(() => Int)
  id: number;

  @AutoMap()
  @Field(() => String)
  revelationPlace: string;

  @AutoMap()
  @Field(() => Int)
  revelationOrder: number;

  @AutoMap()
  @Field(() => Boolean)
  bismillahPre: boolean;

  @AutoMap()
  @Field(() => String)
  nameSimple: string;

  @AutoMap()
  @Field(() => String)
  nameComplex: string;

  @AutoMap()
  @Field(() => String)
  nameArabic: string;

  @AutoMap()
  @Field(() => Number)
  versesCount: number;

  @AutoMap(() => [Number])
  @Field(() => [Number])
  pages: number[];

  @AutoMap(() => [TranslatedName])
  @Field(() => [TranslatedName])
  translatedName: TranslatedName[];
}
