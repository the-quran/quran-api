import { AutoMap } from '@automapper/classes';
import { InputType, Int, Field } from '@nestjs/graphql';
import { CreateAuthorInput } from './create-author.input';

@InputType()
export class CreateTranslationInfoInput {
  @AutoMap()
  @Field(() => Int)
  id: number;

  @AutoMap()
  @Field(() => String)
  name: string;

  @AutoMap()
  @Field(() => String)
  isoCode: string;

  @AutoMap()
  @Field(() => String)
  nativeName: string;

  @AutoMap()
  @Field(() => String)
  direction: string;

  @AutoMap(() => [CreateAuthorInput])
  @Field(() => [CreateAuthorInput])
  authors: CreateAuthorInput[];
}
