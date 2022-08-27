import { AjaxResponse } from 'rxjs/ajax';
import { TotalLoaded } from '../types/total-loaded';

export const totalLoaded = <T>({
  total,
  loaded,
}: AjaxResponse<T>): TotalLoaded => ({
  total,
  loaded,
});
