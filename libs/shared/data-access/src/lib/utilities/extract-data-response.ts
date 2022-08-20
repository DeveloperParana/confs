import { AxiosResponse } from 'axios';

export const extractDataResponse = <T>({ data }: AxiosResponse<T>) => data;
