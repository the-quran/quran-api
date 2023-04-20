import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateChapterInput } from './dto/create-chapter.input';
import { UpdateChapterInput } from './dto/update-chapter.input';
import { Chapter } from './schemas/chapter.schema';
import { Chapter as chapterEntity } from './entities/chapter.entity';

@Injectable()
export class ChapterService {
  constructor(
    @InjectModel(Chapter.name) private readonly chapterModel: Model<Chapter>,
    @InjectMapper() private readonly classMapper: Mapper,
  ) {}
  async create(
    createChapterInput: CreateChapterInput,
  ): Promise<chapterEntity | null> {
    const chapter = this.classMapper.map(
      createChapterInput,
      CreateChapterInput,
      Chapter,
    );
    console.log(chapter);
    return this.classMapper.mapAsync(
      await this.chapterModel.create(chapter),
      Chapter,
      chapterEntity,
    );
  }

  async findAll(): Promise<chapterEntity[] | null> {
    return this.classMapper.mapArrayAsync(
      await this.chapterModel.find().exec(),
      Chapter,
      chapterEntity,
    );
  }

  async findOne(id: number): Promise<chapterEntity | null> {
    return this.classMapper.mapAsync(
      await this.chapterModel.findOne({ _id: id }).exec(),
      Chapter,
      chapterEntity,
    );
  }

  async update(
    id: number,
    updateChapterInput: UpdateChapterInput,
  ): Promise<chapterEntity | null> {
    const filter = { _id: id };
    const update = this.classMapper.map(
      updateChapterInput,
      UpdateChapterInput,
      Chapter,
    );

    return this.classMapper.mapAsync(
      await this.chapterModel.findOneAndUpdate(filter, update).exec(),
      Chapter,
      chapterEntity,
    );
  }

  async remove(id: number): Promise<chapterEntity | null> {
    const filter = { _id: id };
    return this.classMapper.mapAsync(
      await this.chapterModel.findOneAndRemove(filter).exec(),
      Chapter,
      chapterEntity,
    );
  }
}
