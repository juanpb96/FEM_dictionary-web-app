import { createContext } from 'react';
import { ErrorResponse, Response } from '../utils/interfaces';

export type DataContextType = {
  data?: Response[];
  setData: (data: Response[]) => void;
  error?: ErrorResponse;
  setError: (errorData: ErrorResponse) => void;
}

export const DataContext = createContext<DataContextType | {}>({});