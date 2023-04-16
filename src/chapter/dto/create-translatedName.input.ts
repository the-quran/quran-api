import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class TranslatedName {
  @Field(() => String)
  isoCode: string;

  @Field(() => String)
  name: string;
}
