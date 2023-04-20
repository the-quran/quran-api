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
  async create(createChapterInput: CreateChapterInput): Promise<chapterEntity> {
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

  async findAll(): Promise<chapterEntity[]> {
    return this.classMapper.mapArrayAsync(
      await this.chapterModel.find().exec(),
      Chapter,
      chapterEntity,
    );
  }

  async findOne(id: number): Promise<chapterEntity> {
    return this.classMapper.mapAsync(
      await this.chapterModel.findOne({ _id: id }).exec(),
      Chapter,
      chapterEntity,
    );
  }

  async update(id: number, updateChapterInput: UpdateChapterInput) {
    const filter = { _id: id };
    const update = updateChapterInput;

    return await this.chapterModel.findOneAndUpdate(filter, update).exec();
  }

  async remove(id: number) {
    const filter = { _id: id };
    return await this.chapterModel.findOneAndRemove(filter).exec();
  }
}
