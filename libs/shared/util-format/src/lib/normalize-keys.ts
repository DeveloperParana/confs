import { toCamelCase } from './format-case';

export const normalizeKeys = <T extends Record<string, string>>(obj: T) => {
  const normalized = {} as Record<string, string>;

  Object.keys(obj).forEach((key) => {
    normalized[toCamelCase(key)] = obj[key];
  });

  return normalized as T;
};
