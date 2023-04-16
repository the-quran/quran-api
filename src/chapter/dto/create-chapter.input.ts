import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateChapterInput {
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
