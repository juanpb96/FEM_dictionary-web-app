import { useState, useEffect, useRef } from 'react';
import { DEFAULT_CLOSING_CLASS } from '../types/types';

export const useAnimationEnd = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isComponentSet, setIsComponentSet] = useState(false);
  const itemRef = useRef<HTMLElement>();

  const setAnimatedComponent = (component: HTMLElement) => {    
    itemRef.current = component;
    setIsComponentSet(true);
  };

  useEffect(() => {
    const removeClass = () => {
      if (itemRef.current?.classList.contains(DEFAULT_CLOSING_CLASS)) {
        itemRef.current.classList.remove(DEFAULT_CLOSING_CLASS);
        setIsOpen(false);
        setIsComponentSet(false);
      }
    };

    itemRef.current?.addEventListener('animationend', removeClass);
    
    return () => {
      itemRef.current?.removeEventListener('animationend', removeClass);
    }
  }, [isComponentSet]);

  return {
    isOpen,
    setIsOpen,
    setAnimatedComponent
  }
}
