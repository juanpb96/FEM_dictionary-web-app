import { DefaultTheme } from 'styled-components';
import { DefaultStyles } from './default';

export const lightTheme: DefaultTheme = {
  ...DefaultStyles,
  colors: {
    ...DefaultStyles.colors,
    error: '#FF5252',
    text: '#2D2D2D',
    boxShadow: 'rgba(0, 0, 0, 0.1)',
    backgroundPrimary: '#FFFFFF',
    backgroundSecondary: '#F4F4F4'
  },
};