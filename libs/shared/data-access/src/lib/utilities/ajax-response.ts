import { AjaxResponse } from 'rxjs/ajax';

export const ajaxResponse = <T>({ response }: AjaxResponse<T>) => response as T;
