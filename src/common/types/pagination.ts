export type PaginationModel = {
  page?: number;
  pageSize?: number;
};

export type PageResult<T> = {
  results: Array<T>;
  total: number;
};
