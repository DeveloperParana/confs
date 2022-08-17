import { toCamelCase } from './format-case';

type RecordObject<T> = {
  [P in keyof T]?: T[P];
};

export const normalizeKeys = <T, R>(obj: RecordObject<T>) => {
  const normalized = {} as Record<string, unknown>;

  Object.keys(obj).forEach((key) => {
    normalized[toCamelCase(key)] = obj[key as keyof T];
  });

  return normalized as R;
};
