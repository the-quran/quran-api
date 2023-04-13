import { CreateTranslationInfoInput } from './create-translation-info.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTranslationInfoInput extends PartialType(CreateTranslationInfoInput) {
  @Field(() => Int)
  id: number;
}
