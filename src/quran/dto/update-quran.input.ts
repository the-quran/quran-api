import { CreateQuranInput } from './create-quran.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateQuranInput extends PartialType(CreateQuranInput) {
  @Field(() => Int)
  id: number;
}
