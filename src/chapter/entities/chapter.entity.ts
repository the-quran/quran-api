import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Chapter {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
