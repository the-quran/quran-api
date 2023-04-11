import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TranslationService } from './translation.service';
import { Translation } from './entities/translation.entity';
import { CreateTranslationInput } from './dto/create-translation.input';
import { UpdateTranslationInput } from './dto/update-translation.input';

@Resolver(() => Translation)
export class TranslationResolver {
  constructor(private readonly translationService: TranslationService) {}

  @Mutation(() => Translation)
  createTranslation(@Args('createTranslationInput') createTranslationInput: CreateTranslationInput) {
    return this.translationService.create(createTranslationInput);
  }

  @Query(() => [Translation], { name: 'translation' })
  findAll() {
    return this.translationService.findAll();
  }

  @Query(() => Translation, { name: 'translation' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.translationService.findOne(id);
  }

  @Mutation(() => Translation)
  updateTranslation(@Args('updateTranslationInput') updateTranslationInput: UpdateTranslationInput) {
    return this.translationService.update(updateTranslationInput.id, updateTranslationInput);
  }

  @Mutation(() => Translation)
  removeTranslation(@Args('id', { type: () => Int }) id: number) {
    return this.translationService.remove(id);
  }
}
