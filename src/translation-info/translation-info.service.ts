import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTranslationInfoInput } from './dto/create-translation-info.input';
import { UpdateTranslationInfoInput } from './dto/update-translation-info.input';
import { TranslationInfo } from './schemas/translation-info.schema';

@Injectable()
export class TranslationInfoService {
  constructor(
    @InjectModel(TranslationInfo.name)
    private readonly translationInfoModel: Model<TranslationInfo>,
  ) {}
  async create(
    createTranslationInfoInput: CreateTranslationInfoInput,
  ): Promise<TranslationInfo> {
    return await this.translationInfoModel.create(createTranslationInfoInput);
  }

  async findAll(): Promise<TranslationInfo[]> {
    return await this.translationInfoModel.find().exec();
  }

  async findOne(id: number): Promise<TranslationInfo> {
    return await this.translationInfoModel.findOne({ id }).exec();
  }

  async update(
    id: number,
    updateTranslationInfoInput: UpdateTranslationInfoInput,
  ) {
    const filter = { id };
    const update = updateTranslationInfoInput;

    return await this.translationInfoModel
      .findOneAndUpdate(filter, update)
      .exec();
  }

  async remove(id: number) {
    const filter = { id };
    return await this.translationInfoModel.findOneAndRemove(filter).exec();
  }
}
