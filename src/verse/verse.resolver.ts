import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { VerseService } from './verse.service';
import { Verse } from './entities/verse.entity';
import { CreateVerseInput } from './dto/create-verse.input';
import { UpdateVerseInput } from './dto/update-verse.input';

@Resolver(() => Verse)
export class VerseResolver {
  constructor(private readonly verseService: VerseService) {}

  @Mutation(() => Verse)
  createVerse(@Args('createVerseInput') createVerseInput: CreateVerseInput) {
    return this.verseService.create(createVerseInput);
  }

  @Query(() => [Verse], { name: 'verse' })
  findAll() {
    return this.verseService.findAll();
  }

  @Query(() => Verse, { name: 'verse' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.verseService.findOne(id);
  }

  @Mutation(() => Verse)
  updateVerse(@Args('updateVerseInput') updateVerseInput: UpdateVerseInput) {
    return this.verseService.update(updateVerseInput.id, updateVerseInput);
  }

  @Mutation(() => Verse)
  removeVerse(@Args('id', { type: () => Int }) id: number) {
    return this.verseService.remove(id);
  }
}
