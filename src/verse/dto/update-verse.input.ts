import { CreateVerseInput } from './create-verse.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateVerseInput extends PartialType(CreateVerseInput) {
  @Field(() => Int)
  id: number;
}
