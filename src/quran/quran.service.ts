import { Injectable } from '@nestjs/common';
import { CreateQuranInput } from './dto/create-quran.input';
import { UpdateQuranInput } from './dto/update-quran.input';

@Injectable()
export class QuranService {
  create(createQuranInput: CreateQuranInput) {
    return 'This action adds a new quran';
  }

  findAll() {
    return `This action returns all quran`;
  }

  findOne(id: number) {
    return `This action returns a #${id} quran`;
  }

  update(id: number, updateQuranInput: UpdateQuranInput) {
    return `This action updates a #${id} quran`;
  }

  remove(id: number) {
    return `This action removes a #${id} quran`;
  }
}
