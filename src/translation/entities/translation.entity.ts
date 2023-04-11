import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Translation {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
