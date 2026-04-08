import {
  COOKING_METHODS as methodsRaw,
  METHOD_TYPES as methodTypesRaw,
  getCookingMethod as getCookingMethodRaw
} from '../../js/cooking-methods.js';
import type { CookingMethod } from './types';

export const METHOD_TYPES = methodTypesRaw as Record<string, string>;
export const COOKING_METHODS = methodsRaw as CookingMethod[];

export function getCookingMethod(id: string): CookingMethod | undefined {
  return getCookingMethodRaw(id) as CookingMethod | undefined;
}
