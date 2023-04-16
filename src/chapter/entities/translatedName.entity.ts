import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class TranslatedName {
  @Field(() => String)
  isoCode: string;

  @Field(() => String)
  name: string;
}
