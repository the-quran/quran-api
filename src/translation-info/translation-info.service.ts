import { Injectable } from '@nestjs/common';
import { CreateTranslationInfoInput } from './dto/create-translation-info.input';
import { UpdateTranslationInfoInput } from './dto/update-translation-info.input';

@Injectable()
export class TranslationInfoService {
  create(createTranslationInfoInput: CreateTranslationInfoInput) {
    return 'This action adds a new translationInfo';
  }

  findAll() {
    return `This action returns all translationInfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} translationInfo`;
  }

  update(id: number, updateTranslationInfoInput: UpdateTranslationInfoInput) {
    return `This action updates a #${id} translationInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} translationInfo`;
  }
}
