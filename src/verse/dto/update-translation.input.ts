import { CreateTranslationInput } from './create-translation.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTranslationInput extends PartialType(
  CreateTranslationInput,
) {
  @Field(() => Int)
  id: number;
}
