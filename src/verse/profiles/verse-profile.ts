import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, forMember, mapFrom, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { Verse as VerseEntity } from '../entities/verse.entity';
import { Translation as TranslationEntity } from '../entities/translation.entity';
import { Verse } from '../schemas/verse.schema';
import { CreateVerseInput } from '../dto/create-verse.input';
import { UpdateVerseInput } from '../dto/update-verse.input';
import { CreateTranslationInput } from '../dto/create-translation.input';
import { Translation } from '../schemas/translation.schema';
import { UpdateTranslationInput } from '../dto/update-translation.input';

@Injectable()
export class VerseProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(
        mapper,
        CreateVerseInput,
        Verse,
        forMember(
          (d) => d._id,
          mapFrom((s) => s.id),
        ),
      );
      createMap(
        mapper,
        UpdateVerseInput,
        Verse,
        forMember(
          (d) => d._id,
          mapFrom((s) => s.id),
        ),
      );
      createMap(
        mapper,
        CreateTranslationInput,
        Translation,
        forMember(
          (d) => d._id,
          mapFrom((s) => s.id),
        ),
      );
      createMap(
        mapper,
        UpdateTranslationInput,
        Translation,
        forMember(
          (d) => d._id,
          mapFrom((s) => s.id),
        ),
      );

      createMap(
        mapper,
        Verse,
        VerseEntity,
        forMember(
          (d) => d.id,
          mapFrom((s) => s._id),
        ),
      );
      createMap(
        mapper,
        Translation,
        TranslationEntity,
        forMember(
          (d) => d.id,
          mapFrom((s) => s._id),
        ),
      );
    };
  }
}
