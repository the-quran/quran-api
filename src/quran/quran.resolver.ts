import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { QuranService } from './quran.service';
import { Quran } from './entities/quran.entity';
import { CreateQuranInput } from './dto/create-quran.input';
import { UpdateQuranInput } from './dto/update-quran.input';

@Resolver(() => Quran)
export class QuranResolver {
  constructor(private readonly quranService: QuranService) {}

  @Mutation(() => Quran)
  createQuran(@Args('createQuranInput') createQuranInput: CreateQuranInput) {
    return this.quranService.create(createQuranInput);
  }

  @Query(() => [Quran], { name: 'quran' })
  findAll() {
    return this.quranService.findAll();
  }

  @Query(() => Quran, { name: 'quran' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.quranService.findOne(id);
  }

  @Mutation(() => Quran)
  updateQuran(@Args('updateQuranInput') updateQuranInput: UpdateQuranInput) {
    return this.quranService.update(updateQuranInput.id, updateQuranInput);
  }

  @Mutation(() => Quran)
  removeQuran(@Args('id', { type: () => Int }) id: number) {
    return this.quranService.remove(id);
  }
}
