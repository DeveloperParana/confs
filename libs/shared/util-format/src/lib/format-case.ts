function toKebabCase(value: string) {
  // Complex and complete regex value thanks to https://github.com/zellwk/javascript/issues/14
  const regex =
    /([^\p{L}\d]+|(?<=\p{L})(?=\d)|(?<=\d)(?=\p{L})|(?<=[\p{Ll}\d])(?=\p{Lu})|(?<=\p{Lu})(?=\p{Lu}\p{Ll})|(?<=[\p{L}\d])(?=\p{Lu}\p{Ll}))/gu;
  return value.replace(regex, '-').toLowerCase();
}

export function toCamelCase(value: string) {
  const mapFromKebab = (word: string, index: number) => {
    if (index === 0) return word;
    return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
  };

  return toKebabCase(value).split('-').map(mapFromKebab).join('');
}

export function toTitleCase(value: string) {
  const mapFromKebab = (word: string) => {
    return word.slice(0, 1).toUpperCase() + word.slice(1);
  };

  return toKebabCase(value).split('-').map(mapFromKebab).join(' ');
}

export function toSentence(value: string) {
  const interim = toKebabCase(value).replace(/-/g, ' ');
  return interim.slice(0, 1).toUpperCase() + interim.slice(1);
}
