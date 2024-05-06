import { useTranslation } from 'react-i18next';
import { ConvertedToObjectType, TranslationJsonType } from './types';

export const translations: ConvertedToObjectType<TranslationJsonType> =
  {} as any;

/*
 * Converts the static JSON file into an object where keys are identical
 * but values are strings concatenated according to syntax.
 * This is helpful when using the JSON file keys and still having the intellisense support
 * along with type-safety
 */
export const convertLanguageJsonToObject = (
  json: any,
  objToConvertTo = translations,
  current?: string,
) => {
  Object.keys(json).forEach(key => {
    const currentLookupKey = current ? `${current}.${key}` : key;
    if (typeof json[key] === 'object') {
      objToConvertTo[key] = {};
      convertLanguageJsonToObject(
        json[key],
        objToConvertTo[key],
        currentLookupKey,
      );
    } else {
      objToConvertTo[key] = currentLookupKey;
    }
  });
};

export const useInternationalization = () => {
  const { t } = useTranslation();

  const convert = (id: string): any => {
    if (!id) {
      id = '_NOT_TRANSLATED_';
    }
    return id;
  };

  const i18n = {
    t: (id: string, interpolation?: any) => {
      return t(convert(id), interpolation);
    },
  };

  return i18n;
};
