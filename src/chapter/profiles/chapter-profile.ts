import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import {
  createMap,
  extend,
  forMember,
  mapFrom,
  Mapper,
  MappingConfiguration,
} from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { Chapter, TranslatedName } from '../schemas/chapter.schema';
import { CreateChapterInput } from '../dto/create-chapter.input';
import { CreateTranslatedNameInput } from '../dto/create-translatedName.input';

@Injectable()
export class ChapterProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(
        mapper,
        Chapter,
        CreateChapterInput,
        forMember(
          (d) => d.id,
          mapFrom((s) => s._id),
        ),
      );
      createMap(
        mapper,
        CreateChapterInput,
        Chapter,
        forMember(
          (d) => d._id,
          mapFrom((s) => s.id),
        ),
      );

      createMap(mapper, CreateTranslatedNameInput, TranslatedName);
      createMap(mapper, TranslatedName, CreateTranslatedNameInput);
    };
  }
  //   protected get mappingConfigurations(): MappingConfiguration[] {
  //     // the 3 createMap() above will get this `extend()`
  //     return [extend(BaseEntity, BaseDto)];
  // }
}
