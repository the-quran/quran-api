import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class TranslationInfo {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
