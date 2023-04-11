import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Verse {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
