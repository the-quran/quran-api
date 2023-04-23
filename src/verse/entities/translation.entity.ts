import { AutoMap } from '@automapper/classes';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Translation {
  @AutoMap()
  @Field(() => Int)
  id: number;
  @AutoMap()
  @Field(() => String)
  text: string;
}
