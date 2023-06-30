export interface IError {
  name: string;
  msg: string;
  status?: string;
}

export interface ILoader {
  isLoading: boolean;
}

export interface ILoaderAndErrors extends ILoader {
  isError: boolean;
  error: IError | null;
}

export interface IErrorAuth extends ILoaderAndErrors {
  errorName?: boolean;
  errorEmail: boolean;
  errorPass: boolean;
}
