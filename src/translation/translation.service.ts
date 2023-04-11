import { Injectable } from '@nestjs/common';
import { CreateTranslationInput } from './dto/create-translation.input';
import { UpdateTranslationInput } from './dto/update-translation.input';

@Injectable()
export class TranslationService {
  create(createTranslationInput: CreateTranslationInput) {
    return 'This action adds a new translation';
  }

  findAll() {
    return `This action returns all translation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} translation`;
  }

  update(id: number, updateTranslationInput: UpdateTranslationInput) {
    return `This action updates a #${id} translation`;
  }

  remove(id: number) {
    return `This action removes a #${id} translation`;
  }
}
