import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTranslationInfoInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
