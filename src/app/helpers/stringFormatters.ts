class StringFormatterClass {
  public capitalizeString = (str: string): string =>
    str.charAt(0).toUpperCase() + str.slice(1, str.length).toLowerCase();

  public lowerCase = (str: string): string => str.toLowerCase();

  public upperCase = (str: string): string => str.toUpperCase();

  public pascalCase = (str: string): string => {
    return str.split(' ').map(this.capitalizeString).join('');
  };

  public snakeCase = (str: string): string => {
    return str.split(' ').map(this.lowerCase).join('_');
  };

  public kebabCase = (str: string): string => {
    return str.split(' ').map(this.lowerCase).join('-');
  };

  public titleCase = (str: string): string => {
    return str.split(' ').map(this.capitalizeString).join(' ');
  };

  public sentenceCase = (str: string): string => {
    return str.split(' ').map(this.capitalizeString).join(' ');
  };

  public titleCaseWithoutUnderscore = (str: string): string => {
    return str.split('_').map(this.capitalizeString).join(' ');
  };

  public paramCase = (str: string): string => {
    return str.split(' ').map(this.lowerCase).join('-');
  };

  public sentenceCaseWithDashes = (str: string): string => {
    return str.split(' ').map(this.capitalizeString).join('-');
  };

  public sentenceCaseWithUnderscores = (str: string): string => {
    return str.split(' ').map(this.capitalizeString).join('_');
  };

  public sentenceCaseWithTildes = (str: string): string => {
    return str.split(' ').map(this.capitalizeString).join('~');
  };

  public sentenceCaseWithSpaces = (str: string): string => {
    return str.split(' ').map(this.capitalizeString).join(' ');
  };

  public sentenceCaseWithHyphens = (str: string): string => {
    return str.split(' ').map(this.capitalizeString).join('-');
  };

  public isValidNumber = (str?: string | null) => {
    if (!str) return false;

    const numberPattern = /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][-+]?\d+)?$/;
    return numberPattern.test(str);
  };
}

export const StringFormatter = new StringFormatterClass();
