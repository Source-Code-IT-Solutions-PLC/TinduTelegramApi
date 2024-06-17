export interface IError {
  status: number;
  message: string;
  errors: string[];
}

export interface IApiResponse<T> {
  data?: T;
  error?: IError;
}

export interface IPaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  per_page: number;
}

export interface ITableData<T> {
  loading: boolean;
  data: T[];
  total: number;
  page: number;
  per_page: number;
  search: string;
}

export const defaultTableData: ITableData<any> = {
  loading: true,
  data: [],
  page: 1,
  per_page: 100,
  total: 0,
  search: "",
};

export interface ILoadingData<T> {
  data: T[];
  loading: boolean;
}

export interface ILoadingWithPage {
  button: boolean;
  page: boolean;
}
