import React from 'react'
import { useEffect, useRef, useState } from 'react';
import { DEFAULT_CLOSING_CLASS } from '../types/types';

const openKeys = ['ArrowDown', 'ArrowUp', 'Enter', ' '];

export const useDropdown = () => {
  const [isListboxOpen, setIsListboxOpen] = useState(false);
  const [activeDescendant, setActiveDescendant] = useState('font-dropdown-item-sans-serif');
  const comboboxRef = useRef<HTMLElement>();
  const listboxRef = useRef<HTMLElement>();

  const onListboxOpen = () => {
    setIsListboxOpen(true);
  };

  const onListboxClose = () => {
    setIsListboxOpen(false);
  }

  const setDropdownComponent = (comboboxComponent: HTMLElement, listboxComponent: HTMLElement) => {
    comboboxRef.current = comboboxComponent;
    listboxRef.current = listboxComponent;
  };

  const onComboboxKeyDown = (e: React.KeyboardEvent) => {
    console.log('KeyDown:', e.key, !isListboxOpen && openKeys.includes(e.key));
    
    // When user press ArrowDown key, it should open the listbox and focus the first item or active descendant
    if (!isListboxOpen && openKeys.includes(e.key)) {
      setIsListboxOpen(true);

      const selectedListItem = [].slice.call(listboxRef.current?.children).find((element: HTMLElement) => element.ariaSelected === 'true') || listboxRef.current?.children[0];
      (selectedListItem as HTMLElement).classList.add('selected');      

      return;
    }

    if (isListboxOpen && e.key === 'ArrowDown') {
      // TODO: Add keyboard navigation inside dropdown
    }
  };

  const onListItemClick = (e: React.MouseEvent<HTMLElement>) => {
    const { id } = e.currentTarget;
    
    setActiveDescendant(id);
  }; 
  
  
  return {
    activeDescendant,
    isListboxOpen,
    onListboxOpen,
    onListboxClose,
    setDropdownComponent,
    onComboboxKeyDown,
    onListItemClick
  }
}
