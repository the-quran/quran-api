import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTranslationInfoInput } from './dto/create-translation-info.input';
import { UpdateTranslationInfoInput } from './dto/update-translation-info.input';
import { Author, TranslationInfo } from './schemas/translation-info.schema';

@Injectable()
export class TranslationInfoService {
  constructor(
    @InjectModel(TranslationInfo.name)
    private readonly translationInfoModel: Model<TranslationInfo>,
  ) {}
  async create(
    createTranslationInfoInput: CreateTranslationInfoInput,
  ): Promise<TranslationInfo> {
    const result = await this.translationInfoModel.create({
      ...createTranslationInfoInput,
      _id: createTranslationInfoInput.id,
      authors: createTranslationInfoInput.authors.map((v) => ({
        _id: v.id,
        name: v.name,
      })),
    });
    return {
      ...result,
      id: result._id,
      authors: result.authors.map(
        (v) =>
          ({
            id: v._id,
            name: v.name,
          } as Author),
      ),
    };
  }

  async findAll(): Promise<TranslationInfo[]> {
    return await this.translationInfoModel.find().exec();
  }

  async findOne(id: number): Promise<TranslationInfo> {
    return await this.translationInfoModel.findOne({ _id: id }).exec();
  }

  async update(
    id: number,
    updateTranslationInfoInput: UpdateTranslationInfoInput,
  ) {
    const filter = { _id: id };
    const update = {
      ...updateTranslationInfoInput,
      authors: updateTranslationInfoInput.authors.map((v) => ({
        _id: v.id,
        name: v.name,
      })),
    };

    return await this.translationInfoModel
      .findOneAndUpdate(filter, update)
      .exec();
  }

  async remove(id: number) {
    const filter = { _id: id };
    return await this.translationInfoModel.findOneAndRemove(filter).exec();
  }
}
