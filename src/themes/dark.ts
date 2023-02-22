import { DefaultTheme } from 'styled-components';
import { DefaultStyles } from './default';

export const darkTheme: DefaultTheme = {
  ...DefaultStyles,
  colors: {
    ...DefaultStyles.colors,
    error: '#FF5252',
    text: '#FFFFFF',
    boxShadow: 'rgba(164, 69, 237, 1)',
    backgroundPrimary: '#050505',
    backgroundSecondary: '#1F1F1F'
  },
};