import { AutoMap } from '@automapper/classes';
import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTranslationInput {
  @AutoMap()
  @Field(() => Int)
  id: number;
  @AutoMap()
  @Field(() => String)
  text: string;
}
