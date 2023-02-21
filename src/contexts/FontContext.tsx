import { createContext } from 'react';

export type FontContextType = {
  currentFont: string;
  changeFont: (newFont: string) => void;
}

export const FontContext = createContext<FontContextType | {}>({});