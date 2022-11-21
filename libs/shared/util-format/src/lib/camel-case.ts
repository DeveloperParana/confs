import { Options } from './no-case';
import {
  pascalCase,
  pascalCaseTransform,
  pascalCaseTransformMerge,
} from './pascal-case';

export function camelCaseTransform(input: string, index: number) {
  if (index === 0) return input.toLowerCase();
  return pascalCaseTransform(input, index);
}

export function camelCaseTransformMerge(input: string, index: number) {
  if (index === 0) return input.toLowerCase();
  return pascalCaseTransformMerge(input);
}

export function camelCase(input: string, options: Options = {}) {
  return pascalCase(input, {
    transform: camelCaseTransform,
    ...options,
  });
}
