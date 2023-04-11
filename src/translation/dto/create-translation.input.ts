import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTranslationInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
