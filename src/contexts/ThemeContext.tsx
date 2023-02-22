import { createContext } from 'react';

export type ThemeContextType = {
  isDarkThemeEnabled: boolean;
  setIsDarkThemeEnabled: (enableDarkTheme: boolean) => void;
};

export const ThemeContext = createContext<ThemeContextType | {}>({});