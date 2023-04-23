import { AutoMap } from '@automapper/classes';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Translation } from './translation.entity';

@ObjectType()
export class Verse {
  @AutoMap()
  @Field(() => Int)
  id: number;
  @AutoMap()
  @Field(() => Number)
  verse: number;
  @AutoMap()
  @Field(() => Number)
  chapter: number;
  @AutoMap()
  @Field(() => Number)
  hizb: number;
  @AutoMap()
  @Field(() => Number)
  rub: number;
  @AutoMap()
  @Field(() => Number)
  ruku: number;
  @AutoMap()
  @Field()
  manzil: number;
  @AutoMap()
  @Field(() => Number)
  sajdah: number;
  @AutoMap()
  @Field()
  page: number;
  @AutoMap()
  @Field(() => Number)
  juz: number;
  @AutoMap()
  @Field(() => String)
  text: string;
  @AutoMap(() => [Translation])
  @Field(() => [Translation])
  translations: Translation[];
}
