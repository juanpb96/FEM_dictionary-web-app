import { createContext } from 'react';
import { KeyOfFont } from '../types';

interface Font {
  fontId: KeyOfFont;
  displayName: string;
}

export type FontContextType = {
  currentFont: KeyOfFont;
  setCurrentFont: (newFont: KeyOfFont) => void;
  fontList: Font[];
}

export const FontContext = createContext<FontContextType | {}>({});