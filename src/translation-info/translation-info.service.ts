import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTranslationInfoInput } from './dto/create-translation-info.input';
import { UpdateTranslationInfoInput } from './dto/update-translation-info.input';
import { Author, TranslationInfo } from './schemas/translation-info.schema';
import { TranslationInfo as TranslationInfoEntity } from './entities/translation-info.entity';

@Injectable()
export class TranslationInfoService {
  constructor(
    @InjectModel(TranslationInfo.name)
    private readonly translationInfoModel: Model<TranslationInfo>,
    @InjectMapper() private readonly classMapper: Mapper,
  ) {}
  async create(
    createTranslationInfoInput: CreateTranslationInfoInput,
  ): Promise<TranslationInfoEntity | null> {
    const translationInfo = this.classMapper.map(
      createTranslationInfoInput,
      CreateTranslationInfoInput,
      TranslationInfo,
    );

    return this.classMapper.mapAsync(
      await this.translationInfoModel.create(translationInfo),
      TranslationInfo,
      TranslationInfoEntity,
    );
  }

  async findAll(): Promise<TranslationInfoEntity[] | null> {
    return this.classMapper.mapArrayAsync(
      await this.translationInfoModel.find().exec(),
      TranslationInfo,
      TranslationInfoEntity,
    );
  }

  async findOne(id: number): Promise<TranslationInfoEntity | null> {
    return this.classMapper.mapAsync(
      await this.translationInfoModel.findOne({ _id: id }).exec(),
      TranslationInfo,
      TranslationInfoEntity,
    );
  }

  async update(
    id: number,
    updateTranslationInfoInput: UpdateTranslationInfoInput,
  ): Promise<TranslationInfoEntity | null> {
    const filter = { _id: id };
    const update = this.classMapper.map(
      updateTranslationInfoInput,
      UpdateTranslationInfoInput,
      TranslationInfo,
    );

    return this.classMapper.mapAsync(
      await this.translationInfoModel.findOneAndUpdate(filter, update).exec(),
      TranslationInfo,
      TranslationInfoEntity,
    );
  }

  async remove(id: number): Promise<TranslationInfoEntity | null> {
    const filter = { _id: id };
    return this.classMapper.mapAsync(
      await this.translationInfoModel.findOneAndRemove(filter).exec(),
      TranslationInfo,
      TranslationInfoEntity,
    );
  }
}
