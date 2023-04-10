import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Quran {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
