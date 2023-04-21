import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, forMember, mapFrom, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { TranslationInfo as TranslationInfoEntity } from '../entities/translation-info.entity';
import { Author as AuthorEntity } from '../entities/author.entity';
import { TranslationInfo } from '../schemas/translation-info.schema';
import { CreateTranslationInfoInput } from '../dto/create-translation-info.input';
import { UpdateTranslationInfoInput } from '../dto/update-translation-info.input';

@Injectable()
export class TranslationInfoProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(
        mapper,
        CreateTranslationInfoInput,
        TranslationInfo,
        forMember(
          (d) => d._id,
          mapFrom((s) => s.id),
        ),
      );
      createMap(
        mapper,
        UpdateTranslationInfoInput,
        TranslationInfo,
        forMember(
          (d) => d._id,
          mapFrom((s) => s.id),
        ),
      );
      createMap(mapper, CreateTranslatedNameInput, TranslatedName);

      createMap(
        mapper,
        TranslationInfo,
        translationInfoEntity,
        forMember(
          (d) => d.id,
          mapFrom((s) => s._id),
        ),
      );
      createMap(
        mapper,
        TranslationInfo,
        translationInfoEntity,
        forMember(
          (d) => d.id,
          mapFrom((s) => s._id),
        ),
      );
      createMap(mapper, TranslatedName, TranslatedNameEntity);
    };
  }
  //   protected get mappingConfigurations(): MappingConfiguration[] {
  //     // the 3 createMap() above will get this `extend()`
  //     return [extend(BaseEntity, BaseDto)];
  // }
}
