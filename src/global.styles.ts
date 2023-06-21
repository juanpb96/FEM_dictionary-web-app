import { createGlobalStyle, css } from 'styled-components';
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

  // CSS Reset taken from: https://www.joshwcomeau.com/css/custom-css-reset/

  /*
    1. Use a more-intuitive box-sizing model.
  */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  /*
    2. Remove default margin
  */
  * {
    margin: 0;
  }
  /*
    3. Allow percentage-based heights in the application
  */
  html, body {
    height: 100%;
  }
  /*
    Typographic tweaks!
    4. Add accessible line-height
    5. Improve text rendering
  */
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  /*
    6. Improve media defaults
  */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  /*
    7. Remove built-in form typography styles
  */
  input, button, textarea, select {
    font: inherit;
  }
  /*
    8. Avoid text overflows
  */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  /*
    9. Create a root stacking context
  */
  #root, #__next {
    isolation: isolate;
  }

  body {
    background-color: ${({theme}) => theme.colors.backgroundPrimary};
    color: ${({theme}) => theme.colors.text};
    transition: background-color 150ms ease-in-out,
                color 150ms ease-in-out;
  }

  .sr-only {
    display: inline-block;
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
  }

  blockquote {
    &::before {
      content: open-quote;
    }
  
    &::after {
      content: close-quote;
    }  
  }
`;