import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTranslatedNameInput {
  @Field(() => String)
  isoCode: string;

  @Field(() => String)
  name: string;
}
