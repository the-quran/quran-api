import { CreateTranslatedNameInput } from './create-translated-name.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTranslatedNameInput extends PartialType(
  CreateTranslatedNameInput,
) {
  @Field(() => Int)
  id: number;
}
