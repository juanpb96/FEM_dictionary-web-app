import { DefaultTheme } from 'styled-components';
import { DefaultStyles } from './default';

export const darkTheme: DefaultTheme = {
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
    text: '#FFFFFF',
    boxShadow: 'rgba(164, 69, 237, 1)',
    backgroundPrimary: '#050505',
    backgroundSecondary: '#1F1F1F'
  },
};