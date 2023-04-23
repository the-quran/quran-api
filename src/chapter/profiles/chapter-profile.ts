import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, forMember, mapFrom, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { Chapter as ChapterEntity } from '../entities/chapter.entity';
import { TranslatedName as TranslatedNameEntity } from '../entities/translated-name.entity';
import { Chapter } from '../schemas/chapter.schema';
import { CreateChapterInput } from '../dto/create-chapter.input';
import { CreateTranslatedNameInput } from '../dto/create-translated-name.input';
import { UpdateChapterInput } from '../dto/update-chapter.input';
import { TranslatedName } from '../schemas/translated-name.schema';
import { UpdateTranslatedNameInput } from '../dto/update-translated-name.input';

@Injectable()
export class ChapterProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(
        mapper,
        CreateChapterInput,
        Chapter,
        forMember(
          (d) => d._id,
          mapFrom((s) => s.id),
        ),
      );
      createMap(
        mapper,
        UpdateChapterInput,
        Chapter,
        forMember(
          (d) => d._id,
          mapFrom((s) => s.id),
        ),
      );
      createMap(
        mapper,
        CreateTranslatedNameInput,
        TranslatedName,
        forMember(
          (d) => d._id,
          mapFrom((s) => s.isoCode),
        ),
      );
      createMap(
        mapper,
        UpdateTranslatedNameInput,
        TranslatedName,
        forMember(
          (d) => d._id,
          mapFrom((s) => s.isoCode),
        ),
      );

      createMap(
        mapper,
        Chapter,
        ChapterEntity,
        forMember(
          (d) => d.id,
          mapFrom((s) => s._id),
        ),
      );
      createMap(
        mapper,
        TranslatedName,
        TranslatedNameEntity,
        forMember(
          (d) => d.isoCode,
          mapFrom((s) => s._id),
        ),
      );
    };
  }
  //   protected get mappingConfigurations(): MappingConfiguration[] {
  //     // the 3 createMap() above will get this `extend()`
  //     return [extend(BaseEntity, BaseDto)];
  // }
}
