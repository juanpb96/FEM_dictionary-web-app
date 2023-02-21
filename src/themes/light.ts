import { DefaultTheme } from 'styled-components';
import { DefaultStyles } from './default';

export const lightTheme: DefaultTheme = {
  ...DefaultStyles,
  colors: {
    night: '#050505',
    darkJungle: '#1F1F1F',
    heavyMetal: '#2D2D2D',
    charcoal: '#3A3A3A',
    paleSky: '#757575',
    mercury: '#E9E9E9',
    whiteSmoke: '#F4F4F4',
    white: '#FFFFFF',
    purpleFlower: '#A445ED',
    error: '#FF5252',
    text: '#2D2D2D',
    boxShadow: 'rgba(0, 0, 0, 0.1)',
    backgroundPrimary: '#FFFFFF',
    backgroundSecondary: '#F4F4F4'
  },
};