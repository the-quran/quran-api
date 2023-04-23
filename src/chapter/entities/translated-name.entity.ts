import { AutoMap } from '@automapper/classes';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class TranslatedName {
  @AutoMap()
  @Field(() => String)
  isoCode: string;

  @AutoMap()
  @Field(() => String)
  name: string;
}
