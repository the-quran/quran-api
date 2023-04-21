import { CreateTranslationInfoInput } from './create-translation-info.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { AutoMap } from '@automapper/classes';

@InputType()
export class UpdateTranslationInfoInput extends PartialType(
  CreateTranslationInfoInput,
) {
  @AutoMap()
  @Field(() => Int)
  id: number;
}
