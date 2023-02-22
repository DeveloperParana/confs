import {camelCase} from './camel-case';

type RecordObject<T> = {
  [P in keyof T]?: T[P];
};

export const normalizeKeys = <T, R>(obj: RecordObject<T>) => {
  const normalized = {} as Record<string, unknown>;

  Object.entries(obj).forEach(([key, value]) => {
    normalized[camelCase(key)] = value;
  });

  return normalized as R;
};
