import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Author } from './author.entity';

@ObjectType()
export class TranslationInfo {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  isoCode: string;

  @Field(() => String)
  nativeName: string;

  @Field(() => String)
  direction: string;

  @Field(() => [Author])
  authors: Author[];
}
