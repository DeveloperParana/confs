import { AjaxResponse } from 'rxjs/ajax';
import { TotalLoaded } from '../http';

export const totalLoaded = <T>({
  total,
  loaded,
}: AjaxResponse<T>): TotalLoaded => ({
  total,
  loaded,
});
