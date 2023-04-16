import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Chapter {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  revelationPlace: string;

  @Field(() => Int)
  revelationOrder: number;

  @Field(() => Boolean)
  bismillahPre: boolean;

  @Field(() => String)
  nameSimple: string;

  @Field(() => String)
  nameComplex: string;

  @Field(() => String)
  nameArabic: string;

  @Field(() => Int)
  versesCount: number;
}
