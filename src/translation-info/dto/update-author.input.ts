import { AutoMap } from '@automapper/classes';
import { InputType, Int, Field, PartialType } from '@nestjs/graphql';
import { CreateAuthorInput } from './create-author.input';

@InputType()
export class UpdateAuthorInput extends PartialType(CreateAuthorInput) {
  @AutoMap()
  @Field(() => Int)
  id: number;
}
