import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAuthorInput {
  @Field(() => Int)
  id: number;
  @Field(() => String)
  name: string;
}
