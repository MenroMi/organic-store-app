export interface IError {
  name: string;
  msg: string;
  status?: string;
}

export interface ILoader {
  isLoading: boolean;
}

export interface IErrors {
  isError: boolean;
  error: IError | null;
}
