import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateChapterInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
