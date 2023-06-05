import { useState, useEffect } from 'react';
import { FontContext } from './FontContext';
import { KeyOfFont } from '../types';
import { LocalStorageKeys } from '../utils/constants';

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

export const FontProvider = ({children}: React.PropsWithChildren) => {
  const [currentFont, setCurrentFont] = useState<KeyOfFont>('sansSerif');

  useEffect(() => {
    const storedValue = localStorage.getItem(LocalStorageKeys.preferredFontId);

    if (storedValue !== null) {
      setCurrentFont(storedValue as KeyOfFont);
    }
  }, []);
  

  return (
    <FontContext.Provider value={{currentFont, setCurrentFont, fontList}}>
      {children}
    </FontContext.Provider>
  )
}
