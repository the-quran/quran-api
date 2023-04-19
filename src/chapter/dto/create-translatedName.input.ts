import { AutoMap } from '@automapper/classes';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTranslatedNameInput {
  @AutoMap()
  @Field(() => String)
  isoCode: string;

  @AutoMap()
  @Field(() => String)
  name: string;
}
