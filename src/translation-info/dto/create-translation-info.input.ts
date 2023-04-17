import { InputType, Int, Field } from '@nestjs/graphql';
import { CreateAuthorInput } from './create-author.input';

@InputType()
export class CreateTranslationInfoInput {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  isoCode: string;

  @Field(() => String)
  nativeName: string;

  @Field(() => String)
  direction: string;

  @Field(() => CreateAuthorInput)
  authors: CreateAuthorInput[];
}
