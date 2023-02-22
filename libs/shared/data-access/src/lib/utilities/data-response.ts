import {AxiosResponse} from 'axios';

export const dataResponse = <T>({data}: AxiosResponse<T>) => data;
