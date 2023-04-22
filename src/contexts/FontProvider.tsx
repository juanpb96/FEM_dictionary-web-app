import { useState } from 'react';
import { FontContext } from './FontContext';
import { KeyOfFont } from '../types';

export const fontList = [
  {
    fontId: 'sansSerif',
    displayName: 'Sans Serif'
  },
  {
    fontId: 'serif',
    displayName: 'Serif'
  },
  {
    fontId: 'mono',
    displayName: 'Mono'
  },
];

// TODO: Set font in localStorage
export const FontProvider = ({children}: React.PropsWithChildren) => {
  const [currentFont, setCurrentFont] = useState<KeyOfFont>('sansSerif');    

  return (
    <FontContext.Provider value={{currentFont, setCurrentFont, fontList}}>
      {children}
    </FontContext.Provider>
  )
}
