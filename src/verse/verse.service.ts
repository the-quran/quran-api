import { Injectable } from '@nestjs/common';
import { CreateVerseInput } from './dto/create-verse.input';
import { UpdateVerseInput } from './dto/update-verse.input';

@Injectable()
export class VerseService {
  create(createVerseInput: CreateVerseInput) {
    return 'This action adds a new verse';
  }

  findAll() {
    return `This action returns all verse`;
  }

  findOne(id: number) {
    return `This action returns a #${id} verse`;
  }

  update(id: number, updateVerseInput: UpdateVerseInput) {
    return `This action updates a #${id} verse`;
  }

  remove(id: number) {
    return `This action removes a #${id} verse`;
  }
}
