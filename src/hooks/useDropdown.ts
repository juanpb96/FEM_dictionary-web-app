import React from 'react'
import { useRef, useState } from 'react';
import { DROPDOWN_CLASS } from '../types/types';

const openKeys = ['ArrowDown', 'ArrowUp', 'Enter', ' '];
const navigationKeys = ['ArrowDown', 'ArrowUp'];
const exitKeys = ['Esc', 'Escape', 'Enter', ' ']

export const useDropdown = () => {
  const [isListboxOpen, setIsListboxOpen] = useState(false);
  const [selectedKeyboardItem, setSelectedKeyboardItem] = useState({ itemId: '', content: '' });
  const [activeDescendant, setActiveDescendant] = useState('font-dropdown-item-sans-serif');
  const comboboxRef = useRef<HTMLElement>();
  const listboxRef = useRef<HTMLElement>();
  const listItemsRef = useRef<HTMLElement[]>([]);
  const currentActiveItemIndexRef = useRef<number>(0);

  const onListboxOpen = () => {
    setIsListboxOpen(true);
  };

  const onListboxClose = () => {
    setIsListboxOpen(false);
  }

  const setDropdownComponent = (comboboxComponent: HTMLElement, listboxComponent: HTMLElement) => {
    comboboxRef.current = comboboxComponent;
    listboxRef.current = listboxComponent;
    listItemsRef.current = [].slice.call(listboxRef.current?.children);    
  };

  const onComboboxKeyDown = (e: React.KeyboardEvent) => {    
    if (!isListboxOpen && openKeys.includes(e.key)) {
      setIsListboxOpen(true);

      const selectedListItem = listItemsRef.current.find((element: HTMLElement, index) => {
        currentActiveItemIndexRef.current = index;
        return element.getAttribute('aria-selected') === 'true';
      }) || listboxRef.current?.children[0];            

      (selectedListItem as HTMLElement).classList.add(DROPDOWN_CLASS.selected);
      (selectedListItem as HTMLElement).focus();        

      return;
    }

    if (isListboxOpen && navigationKeys.includes(e.key)) {
      let newIndex = 0;

      if (e.key === 'ArrowUp') {
        newIndex = currentActiveItemIndexRef.current - 1;
      } else if (e.key === 'ArrowDown') {
        newIndex = currentActiveItemIndexRef.current + 1;
      }      
      
      if (newIndex >= 0 && newIndex < listItemsRef.current.length) {
        (listItemsRef.current[currentActiveItemIndexRef.current] as HTMLElement).classList.remove(DROPDOWN_CLASS.selected);
        (listItemsRef.current[newIndex] as HTMLElement).classList.add(DROPDOWN_CLASS.selected);
        currentActiveItemIndexRef.current = newIndex;
      }
    }

    if (isListboxOpen && exitKeys.includes(e.key)) {
      const { id, textContent = '' } = listItemsRef.current[currentActiveItemIndexRef.current];

      (listItemsRef.current[currentActiveItemIndexRef.current] as HTMLElement).classList.remove(DROPDOWN_CLASS.selected);
      setActiveDescendant(id);
      setSelectedKeyboardItem({
        itemId: id,
        content: textContent!  
      });
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
    selectedKeyboardItem,
    setDropdownComponent,
    onComboboxKeyDown,
    onListItemClick
  }
}
