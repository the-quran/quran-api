import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateChapterInput } from './dto/create-chapter.input';
import { UpdateChapterInput } from './dto/update-chapter.input';
import { Chapter } from './schemas/chapter.schema';

@Injectable()
export class ChapterService {
  constructor(
    @InjectModel(Chapter.name) private readonly chapterModel: Model<Chapter>,
  ) {}
  async create(createChapterInput: CreateChapterInput): Promise<Chapter> {
    return await this.chapterModel.create(createChapterInput);
  }

  async findAll(): Promise<Chapter[]> {
    return await this.chapterModel.find().exec();
  }

  async findOne(id: number): Promise<Chapter> {
    return await this.chapterModel.findOne({ id }).exec();
  }

  async update(id: number, updateChapterInput: UpdateChapterInput) {
    const filter = { id };
    const update = updateChapterInput;

    return await this.chapterModel.findOneAndUpdate(filter, update).exec();
  }

  async remove(id: number) {
    const filter = { id };
    return await this.chapterModel.findOneAndRemove(filter).exec();
  }
}
