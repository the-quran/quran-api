import { AutoMap } from '@automapper/classes';
import { InputType, Int, Field } from '@nestjs/graphql';
import { CreateTranslatedNameInput } from './create-translatedName.input';

@InputType()
export class CreateChapterInput {
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

  @AutoMap(() => [CreateTranslatedNameInput])
  @Field(() => [CreateTranslatedNameInput])
  translatedName: CreateTranslatedNameInput[];
}
