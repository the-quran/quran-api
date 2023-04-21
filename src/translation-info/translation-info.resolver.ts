import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TranslationInfoService } from './translation-info.service';
import { TranslationInfo } from './entities/translation-info.entity';
import { CreateTranslationInfoInput } from './dto/create-translation-info.input';
import { UpdateTranslationInfoInput } from './dto/update-translation-info.input';

@Resolver(() => TranslationInfo)
export class TranslationInfoResolver {
  constructor(
    private readonly translationInfoService: TranslationInfoService,
  ) {}

  @Mutation(() => TranslationInfo)
  createTranslationInfo(
    @Args('createTranslationInfoInput')
    createTranslationInfoInput: CreateTranslationInfoInput,
  ) {
    return this.translationInfoService.create(createTranslationInfoInput);
  }

  @Query(() => [TranslationInfo], { name: 'translationInfos' })
  findAll() {
    return this.translationInfoService.findAll();
  }

  @Query(() => TranslationInfo, { name: 'translationInfo' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.translationInfoService.findOne(id);
  }

  @Mutation(() => TranslationInfo)
  updateTranslationInfo(
    @Args('updateTranslationInfoInput')
    updateTranslationInfoInput: UpdateTranslationInfoInput,
  ) {
    return this.translationInfoService.update(
      updateTranslationInfoInput.id,
      updateTranslationInfoInput,
    );
  }

  @Mutation(() => TranslationInfo)
  removeTranslationInfo(@Args('id', { type: () => Int }) id: number) {
    return this.translationInfoService.remove(id);
  }
}
