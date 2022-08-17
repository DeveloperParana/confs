import { AjaxResponse } from 'rxjs/ajax';

export const extractAjaxResponse = <T>({ response }: AjaxResponse<T>) =>
  response as T;
