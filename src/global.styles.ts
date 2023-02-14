import { createGlobalStyle } from 'styled-components';
import InterRegularTTF from './assets/fonts/inter/static/Inter-Regular.ttf';
import InterBoldTTF from './assets/fonts/inter/static/Inter-Bold.ttf';
import InconsolataRegularTTF from './assets/fonts/inconsolata/static/Inconsolata-Regular.ttf';
import InconsolataBoldTTF from './assets/fonts/inconsolata/static/Inconsolata-Bold.ttf';
import LoraRegularTTF from './assets/fonts/lora/static/Lora-Regular.ttf';
import LoraBoldTTF from './assets/fonts/lora/static/Lora-Bold.ttf';
import LoraBoldItalicTTF from './assets/fonts/lora/static/Lora-BoldItalic.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url(${InterRegularTTF}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${InterBoldTTF}) format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Inconsolata';
    src: url(${InconsolataRegularTTF}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Inconsolata';
    src: url(${InconsolataBoldTTF}) format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Lora';
    src: url(${LoraRegularTTF}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Lora';
    src: url(${LoraBoldTTF}) format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Lora';
    src: url(${LoraBoldItalicTTF}) format('truetype');
    font-weight: 700;
    font-style: italic;
    font-display: auto;
  }
`;