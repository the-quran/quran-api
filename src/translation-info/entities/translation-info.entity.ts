import { AutoMap } from '@automapper/classes';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Author } from './author.entity';

@ObjectType()
export class TranslationInfo {
  @AutoMap()
  @Field(() => Int)
  id: number;

  @AutoMap()
  @Field(() => String)
  name: string;

  @AutoMap()
  @Field(() => String)
  isoCode: string;

  @AutoMap()
  @Field(() => String)
  nativeName: string;

  @AutoMap()
  @Field(() => String)
  direction: string;

  @AutoMap(() => [Author])
  @Field(() => [Author])
  authors: Author[];
}
