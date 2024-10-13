export interface ApiResults<T> {
  page: number;
  total_results: number;
  total_pages: number;
  results: T;
}

export interface ApiError {
  status_code: number;
  status_message: string;
  success: boolean;
}
