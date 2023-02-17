import { ReactNode, useState, useContext, useEffect, useRef } from 'react';
import * as S from './styles/StyledComponents';
import { FontContext, FontContextType } from '../contexts/FontContext';
import { useAnimationEnd } from '../hooks/useAnimationEnd';
import { DEFAULT_CLOSING_CLASS } from '../types/types';
import { useDropdown } from '../hooks/useDropdown';

interface DropdownItemProps {
  font: string;
  isSelected: boolean;
  onClick: (e : React.MouseEvent<HTMLDivElement>) => void;
  children?: ReactNode;
}

const DropdownItem = ({ font, isSelected, onClick }: DropdownItemProps) => {
  const id = `font-dropdown-item-${font.split(' ').join('-').toLowerCase()}`;

  // TODO: Set aria selected depending on the active font
  return (
    <S.ListItem
      aria-selected={isSelected}
      role="option"
      id={id}
      data-testid={id}
      onClick={onClick}
      $mode={font}
    >
      {font}
    </S.ListItem>
  );
};

// TODO: Set a global font in a context and save it to localStorage
export const Dropdown = () => {
  const { changeFont } = useContext(FontContext) as FontContextType;
  const [selectedFont, setSelectedFont] = useState('Sans Serif');
  // FIXME: Active descendant should be assigned from context
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
    if (comboboxRef && comboboxRef.current && listboxRef && listboxRef.current) {
      setDropdownComponent(comboboxRef.current!, listboxRef.current);
      setAnimatedComponent(listboxRef.current!);
    }
  }, []);

  useEffect(() => {
    if (selectedKeyboardItem !== '') {
      setSelectedFont(selectedKeyboardItem);
      changeFont(selectedKeyboardItem);
      listboxRef.current?.classList.add(DEFAULT_CLOSING_CLASS);
    }
  }, [selectedKeyboardItem])
  

  const onComboboxClick = () => {
    if (isListboxOpen) {
      listboxRef.current?.classList.add(DEFAULT_CLOSING_CLASS);
    } else {
      onListboxOpen();
    }
  };

  const onDropdownItemClick = (e: React.MouseEvent<HTMLDivElement>) => {    
    const { textContent = '' } = e.currentTarget;
    
    onListItemClick(e);
    setSelectedFont(textContent!);
    changeFont(textContent!);
    listboxRef.current?.classList.add(DEFAULT_CLOSING_CLASS);
  };

  const onDropdownBlur = () => {
    listboxRef.current?.classList.add(DEFAULT_CLOSING_CLASS);
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

          {selectedFont}
        </S.ComboBox>

        <S.ListBox
          id="font-listbox"
          aria-labelledby="font-dropdown-label"
          role="listbox"
          tabIndex={-1}
          ref={listboxRef}
          className={isListboxOpen ? '' : 'closed'}
        >
          {/* TODO: Take list items from font context */}
          {
            ['Sans Serif', 'Serif', 'Mono'].map(font => (
              <DropdownItem
                key={font}
                font={font}
                isSelected={font === selectedFont}
                onClick={onDropdownItemClick}
              />
            ))
          }
        </S.ListBox>
      </S.DropdownContainer>
    </>
  )
}
