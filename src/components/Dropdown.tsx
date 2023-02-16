import { ReactNode, useState, useContext, useEffect, useRef } from 'react';
import * as S from './styles/StyledComponents';
import { FontContext, FontContextType } from '../contexts/FontContext';
import { useAnimationEnd } from '../hooks/useAnimationEnd';

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
  const [activeDescendant, setActiveDescendant] = useState('font-dropdown-item-sans-serif');
  const listboxRef = useRef<HTMLDivElement>(null);
  const { isOpen, setIsOpen, setAnimatedComponent } = useAnimationEnd();

  useEffect(() => {
    if (isOpen) {
      setAnimatedComponent(listboxRef.current!);
    }
  }, [isOpen])
  

  const onComboboxClick = () => {
    if (isOpen) {
      listboxRef.current?.classList.add('closing');
    } else {
      setIsOpen(true);
    }
  };

  const onListItemClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { textContent = '', id } = e.currentTarget;
    
    setSelectedFont(textContent!);
    changeFont(textContent!);
    setActiveDescendant(id);
    listboxRef.current?.classList.add('closing');
  };  

  return (
    <>
      <label className="sr-only" id="font-dropdown-label" data-testid="font-dropdown-label">
        Select font style
      </label>
      <S.DropdownContainer>
        <S.ComboBox
          aria-activedescendant={isOpen ? activeDescendant : ''}
          aria-controls="font-listbox"
          aria-expanded={isOpen}
          aria-labelledby="font-dropdown-label"
          aria-haspopup="listbox"
          data-testid="font-dropdown"
          role="combobox"
          tabIndex={0}
          onClick={onComboboxClick}
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

        {
          isOpen && (
            <S.ListBox
              id="font-listbox"
              aria-labelledby="font-dropdown-label"
              role="listbox"
              tabIndex={-1}
              ref={listboxRef}
            >
              {/* TODO: Take list items from font context */}
              {
                ['Sans Serif', 'Serif', 'Mono'].map(font => (
                  <DropdownItem
                    key={font}
                    font={font}
                    isSelected={font === 'Sans Serif'}
                    onClick={onListItemClick}
                  />
                ))
              }
            </S.ListBox>
          )
        }
      </S.DropdownContainer>
    </>
  )
}
