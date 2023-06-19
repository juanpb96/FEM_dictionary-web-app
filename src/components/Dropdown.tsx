import { useState, useContext, useEffect, useRef } from 'react';
import * as S from './styles/Dropdown.styled';
import { FontContext, FontContextType } from '../contexts/FontContext';
import { useAnimationEnd } from '../hooks/useAnimationEnd';
import { DROPDOWN_CLASS, KeyOfFont } from '../types';
import { useDropdown } from '../hooks/useDropdown';
import { DropdownItem } from './DropdownItem';
import { Typography } from './Typography';
import { LocalStorageKeys } from '../utils/constants';

interface SelectedFontValues {
  fontId: KeyOfFont;
  displayName: string;
}

const initialState: SelectedFontValues = {
  fontId: 'serif',
  displayName: 'Serif'
};

export const Dropdown = () => {
  const { setCurrentFont, fontList } = useContext(FontContext) as FontContextType;
  const [selectedFont, setSelectedFont] = useState<SelectedFontValues>(initialState);
  const comboboxRef = useRef<HTMLDivElement>(null);
  const listboxRef = useRef<HTMLDivElement>(null);
  const {
    activeDescendant,
    isListboxOpen,
    onListboxOpen,
    onListboxClose,
    selectedKeyboardItem,
    setDropdownComponent,
    onComboboxKeyDown,
    onListItemClick
  } = useDropdown();
  const { setAnimatedComponent } = useAnimationEnd(onListboxClose);

  useEffect(() => {
    const storedId = localStorage.getItem(LocalStorageKeys.preferredFontId);
    const storedDisplayName = localStorage.getItem(LocalStorageKeys.preferredFontName);

    if (storedId !== null && storedDisplayName !== null) {
      setSelectedFont({
        fontId: storedId as KeyOfFont,
        displayName: storedDisplayName
      });
    }
  }, []);
  

  useEffect(() => {
    if (comboboxRef && comboboxRef.current && listboxRef && listboxRef.current) {
      setDropdownComponent(comboboxRef.current!, listboxRef.current);
      setAnimatedComponent(listboxRef.current!);
    }
  }, []);

  useEffect(() => {
    const { itemId, content } = selectedKeyboardItem;

    if ([itemId, content].every(el => el !== '')) {
      const newId = itemId.split('font-dropdown-item-')[1] as KeyOfFont;

      setSelectedFont({
        fontId: newId,
        displayName: content
      });
      setCurrentFont(newId);
      listboxRef.current?.classList.add(DROPDOWN_CLASS.closing);
    }
  }, [selectedKeyboardItem])
  

  const onComboboxClick = () => {
    if (isListboxOpen) {
      listboxRef.current?.classList.add(DROPDOWN_CLASS.closing);
    } else {
      onListboxOpen();
    }
  };

  const onDropdownItemClick = (e: React.MouseEvent<HTMLDivElement>, fontId: KeyOfFont) => {    
    const { id, textContent = '' } = e.currentTarget;    
    const selectedId = id.split('font-dropdown-item-')[1] as KeyOfFont;
    
    onListItemClick(e);
    setSelectedFont({
      fontId: selectedId,
      displayName: textContent!
    });
    setCurrentFont(fontId);
    localStorage.setItem(LocalStorageKeys.preferredFontId, fontId);
    localStorage.setItem(LocalStorageKeys.preferredFontName, textContent!);
    listboxRef.current?.classList.add(DROPDOWN_CLASS.closing);
  };

  const onDropdownBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if ((e.relatedTarget as HTMLElement)?.id !== 'font-listbox') {
      listboxRef.current?.classList.add(DROPDOWN_CLASS.closing);
    }    
  }

  return (
    <>
      <label className="sr-only" id="font-dropdown-label" data-testid="font-dropdown-label">
        Select font style
      </label>
      <S.DropdownContainer>
        <S.ComboBox
          aria-activedescendant={isListboxOpen ? activeDescendant : ''}
          aria-controls="font-listbox"
          aria-expanded={isListboxOpen}
          aria-labelledby="font-dropdown-label"
          aria-haspopup="listbox"
          data-testid="font-dropdown"
          role="combobox"
          tabIndex={0}
          ref={comboboxRef}
          onClick={onComboboxClick}
          onKeyDown={onComboboxKeyDown}
          onBlur={onDropdownBlur}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="8"
            viewBox="0 0 14 8"
            role="presentation"
          >
            <path fill="none" stroke="#A445ED" strokeWidth="1.5" d="m1 1 6 6 6-6"/>
          </svg>

          <Typography
            as="span"
            text={selectedFont.displayName}
            fontStyles={{
              fontWeight: 700,
              fontSize: {
                mobile: '14px',
                tablet: '18px'
              },
              lineHeight: {
                mobile: {
                  sansSerif: '24px',
                  serif: '24px',
                  mono: '24px'
                }
              }
            }}
          />
        </S.ComboBox>

        <S.ListBox
          id="font-listbox"
          aria-labelledby="font-dropdown-label"
          role="listbox"
          tabIndex={-1}
          ref={listboxRef}
          className={isListboxOpen ? '' : DROPDOWN_CLASS.closed}
        >
          {/* TODO: Take list items from font context */}
          {
            fontList.map(({ fontId, displayName }) => (
              <DropdownItem
                key={fontId}
                fontId={fontId}
                displayName={displayName}
                isSelected={fontId === selectedFont.fontId}
                onClick={onDropdownItemClick}
              />
            ))
          }
        </S.ListBox>
      </S.DropdownContainer>
    </>
  )
}
