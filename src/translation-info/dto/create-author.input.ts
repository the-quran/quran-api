import { AutoMap } from '@automapper/classes';
import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAuthorInput {
  @AutoMap()
  @Field(() => Int)
  id: number;
  @AutoMap()
  @Field(() => String)
  name: string;
}
