import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ChapterService } from './chapter.service';
import { Chapter } from './entities/chapter.entity';
import { CreateChapterInput } from './dto/create-chapter.input';
import { UpdateChapterInput } from './dto/update-chapter.input';

@Resolver(() => Chapter)
export class ChapterResolver {
  constructor(private readonly chapterService: ChapterService) {}

  @Mutation(() => Chapter, { nullable: true })
  createChapter(
    @Args('createChapterInput') createChapterInput: CreateChapterInput,
  ) {
    return this.chapterService.create(createChapterInput);
  }

  @Query(() => [Chapter], { name: 'chapters', nullable: true })
  findAll() {
    return this.chapterService.findAll();
  }

  @Query(() => Chapter, { name: 'chapter', nullable: true })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.chapterService.findOne(id);
  }

  @Mutation(() => Chapter, { nullable: true })
  updateChapter(
    @Args('updateChapterInput') updateChapterInput: UpdateChapterInput,
  ) {
    return this.chapterService.update(
      updateChapterInput.id,
      updateChapterInput,
    );
  }

  @Mutation(() => Chapter, { nullable: true })
  removeChapter(@Args('id', { type: () => Int }) id: number) {
    return this.chapterService.remove(id);
  }
}
