import { createContext } from 'react';

export type FontContextType = {
  changeFont: (newFont: string) => void;
}

export const FontContext = createContext<FontContextType | {}>({});